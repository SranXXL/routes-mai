import cors from '@koa/cors';
import Router from '@koa/router';
import koaBody from 'koa-body';
import Koa from 'koa';
import { Client } from 'pg';

import getCities from './handlers/getCities';
import getTransport from './handlers/getTransport';
import testDBConnection from './handlers/testDBConnection';

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

router.get('/', testDBConnection(client)).get('/cities', getCities).get('/transport', getTransport);
app.use(router.routes());

app.listen(3010, () => {
    console.log('Server started on http://localhost:3010/');
});
