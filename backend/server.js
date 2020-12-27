import cors from '@koa/cors';
import Router from '@koa/router';
import koaBody from 'koa-body';
import Koa from 'koa';
import { Client } from 'pg';

import getCities from './handlers/getCities';
import getTransport from './handlers/getTransport';
import findRoutes from './handlers/findRoutes';

const app = (module.exports = new Koa());
const router = Router();
const client = new Client({
    user: 'mai',
    host: 'localhost',
    database: 'routes-mai',
    password: 304,
    port: 40432,
});
client.connect();

app.use(koaBody());
app.use(cors());

router.get('/cities', getCities(client)).get('/transport', getTransport(client)).post('/routes', findRoutes(client));
app.use(router.routes());

app.listen(3010, () => {
    console.log('Server started on http://localhost:3010/');
});
