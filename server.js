import koa from 'koa'; // koa@2
import koaRouter from 'koa-router'; // koa-router@next
import koaBody from 'koa-bodyparser'; // koa-bodyparser@next
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import cors from 'koa-cors';
import convert from 'koa-convert';
import configs from './configs';

import mongoose from 'mongoose';

const app = new koa();
const router = new koaRouter();

const db = mongoose.createConnection(['mongodb://', configs.mongodb.ip, '/', configs.mongodb.dbname].join(''));

if(db) {
	console.log('mongodb connected successfully');
	global.db = db;
}else {
	console.log('mongodb connected failed');
}

import schemaRouters from './routers/schemaRouters';

const schemas = schemaRouters().default;

router.post('/graphql', koaBody(), graphqlKoa({ schema: schemas.HelloSchema }));
router.get('/graphql', graphqlKoa({ schema: schemas.HelloSchema }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(convert(cors(configs.cors)));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(configs.port, () => {
	console.log('app started successfully, listening on port ' + configs.port);
});
