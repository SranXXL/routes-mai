const transport = ['Car', 'Bus', 'Train', 'Airplane'];

const getTransport = async (ctx) => {
    ctx.body = transport;
};

export default getTransport;
