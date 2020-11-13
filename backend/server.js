import cors from '@koa/cors';
import Router from '@koa/router';
import koaBody from 'koa-body';
import Koa from 'koa';

import getCities from './handlers/getCities';
import getTransport from './handlers/getTransport';

const app = (module.exports = new Koa());
const router = Router();

app.use(koaBody());
app.use(cors());

router.get('/cities', getCities).get('/transport', getTransport);
app.use(router.routes());

app.listen(3010, () => {
    console.log('Server started on http://localhost:3010/');
});
