/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import graphLib, { Graph } from '@dagrejs/graphlib';

const VALID_SORT_TYPES = ['cost', 'time'];

const findRoutes = (client) => async (ctx) => {
    const { depature, destination, transports, sort } = JSON.parse(ctx.request.body);
    const enabledTransports = Object.entries(transports || {})
        .filter(([key, value]) => value)
        .map(([key, value]) => key);
    const isTransportFieldValid = enabledTransports.length > 0;
    const isSortFieldValid = VALID_SORT_TYPES.includes(sort);
    const isFormValid = !!depature && !!destination && isTransportFieldValid && isSortFieldValid;
    if (!isFormValid) {
        ctx.throw(400);
    }

    const transport_ids = enabledTransports.join(', ');
    const journeys = await client.query(
        `SELECT id_city1, id_city2, id_transport, cost, time FROM Journeys WHERE id_transport IN (${transport_ids})`
    );
    let totalCost = 0;
    let totalTime = 0;
    const path = [];
    if (journeys.rows.length === 0) {
        ctx.body = { path, totalCost, totalTime };
        return;
    }

    const graph = new Graph({ multigraph: true });
    journeys.rows.forEach(({ id_city1, id_city2, id_transport, cost, time }, index) =>
        graph.setEdge(id_city1, id_city2, { cost, time, id_transport }, `${id_city1}_${index}`)
    );
    const dijkstraResult = graphLib.alg.dijkstra(graph, depature, (e) => graph.edge(e)[sort]);

    let city = destination;
    if (!dijkstraResult[city]) {
        ctx.body = { path, totalCost, totalTime };
        return;
    }

    while (city !== depature) {
        const { distance, predecessor } = dijkstraResult[city];
        const weight = distance - dijkstraResult[predecessor].distance;
        // eslint-disable-next-line no-await-in-loop
        const journeys = await client.query(
            `SELECT id_transport, cost, time FROM Journeys WHERE id_transport IN (${transport_ids}) AND ${sort} = ${weight} LIMIT 1`
        );
        const journey = journeys.rows[0];
        path.unshift(journey);
        totalCost += journey.cost;
        totalTime += journey.time;
        city = predecessor;
    }

    ctx.body = { path, totalCost, totalTime };
};

export default findRoutes;
