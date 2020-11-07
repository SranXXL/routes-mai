const cors = require('@koa/cors');
const router = require('@koa/router')();
const koaBody = require('koa-body');
const Koa = require('koa');

const app = module.exports = new Koa();

const cities = ['Москва', 'Орел', 'Чита'];
const transport = ['Машина', 'Автобус', 'Поезд', 'Самолёт'];

app.use(koaBody());
app.use(cors());

router.get('/cities', getCities)
    .get('/transport', getTransport);
app.use(router.routes());

async function getCities(ctx) {
    ctx.body = cities;
}

async function getTransport(ctx) {
    ctx.body = transport;
}

app.listen(3010, () => {
    console.log('Server started on http://localhost:3010/');
});
