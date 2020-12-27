/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import createGraph from 'ngraph.graph';
import aStarPathSearch from '../utils/a-star/index.js';

const VALID_SORT_TYPES = ['cost', 'time'];

const findRoutes = (client) => async (ctx) => {
    const { depature, destination, transports, sort, alternativeRoutesCount } = JSON.parse(ctx.request.body);
    const enabledTransports = Object.entries(transports || {})
        .filter(([key, value]) => value)
        .map(([key, value]) => key);
    const isTransportFieldValid = enabledTransports.length > 0;
    const isSortFieldValid = VALID_SORT_TYPES.includes(sort);
    const isFormValid =
        !!depature && !!destination && isTransportFieldValid && isSortFieldValid && alternativeRoutesCount >= 0;
    if (!isFormValid) {
        ctx.throw(400);
    }

    const transport_ids = enabledTransports.join(', ');
    const journeys = await client.query(
        `SELECT id_city1, id_city2, id_transport, cost, time FROM Journeys WHERE id_transport IN (${transport_ids})`
    );
    const graph = createGraph();
    journeys.rows.forEach(({ id_city1, id_city2, id_transport, cost, time }) =>
        graph.addLink(id_city1, id_city2, { cost, time, id_transport })
    );

    const pathFinder = aStarPathSearch(graph, {
        distance(fromNode, toNode, link) {
            return link.data[sort];
        },
    });
    const result = pathFinder(depature, destination);
    ctx.body = { result };
};

export default findRoutes;
