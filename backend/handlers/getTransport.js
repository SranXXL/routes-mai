const transport = ['Машина', 'Автобус', 'Поезд', 'Самолёт'];

const getTransport = async (ctx) => {
    ctx.body = transport;
};

export default getTransport;
