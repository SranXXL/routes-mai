const getTransport = (client) => async (ctx) => {
    const transport = await client.query('SELECT id, name FROM Transport');
    ctx.body = transport.rows.map(({ id, name }) => ({ id: id.toString(), name }));
};

export default getTransport;
