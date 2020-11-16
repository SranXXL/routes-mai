const getCities = (client) => async (ctx) => {
    const cities = await client.query('SELECT name FROM Cities');
    ctx.body = cities.rows.map(({ name }) => name);
};

export default getCities;
