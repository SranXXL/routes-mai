const testDBConnection = (client) => async (ctx) => {
    const accounts = await client.query('SELECT * FROM account');
    ctx.body = accounts.rows;
};

export default testDBConnection;
