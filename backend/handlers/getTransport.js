const getTransport = (client) => async (ctx) => {
    const transport = await client.query('SELECT name FROM Transport');
    ctx.body = transport.rows.map(({ name }) => name);
};

export default getTransport;
