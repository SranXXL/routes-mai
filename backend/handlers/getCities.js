const getCities = (client) => async (ctx) => {
    const cities = await client.query('SELECT id, name FROM Cities');
    ctx.body = cities.rows.map(({ id, name }) => ({ id, name }));
};

export default getCities;
