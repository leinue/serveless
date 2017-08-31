const koa = require('koa'); // koa@2
const koaRouter = require('koa-router'); // koa-router@next
const koaBody = require('koa-bodyparser'); // koa-bodyparser@next
const apolloServerKoa = require('apollo-server-koa');

const graphqlKoa = apolloServerKoa.graphqlKoa;
const graphiqlKoa = apolloServerKoa.graphiqlKoa;

const app = new koa();
const router = new koaRouter();
const PORT = 5555;

var myGraphQLSchema = `
	type Property {
	    id: Int!
	    name: String
	    company: PropertyManagementCompany
	    managers: [PropertyManager]
	    unit: Unit
	    conversations: [Conversation]
	}
	type PropertyManagementCompany {
	    id: Int!
	    name: String
	    managers: [PropertyManager]
	    properties: [Property]
	}
	type Unit {
	    id: Int!
	    number: String
	    tennants: [Renter]
	    property: Property
	    conversation: [Conversation]
	}
	interface User {
	    id: Int!
	    firstName: String
	    lastName: String
	}
	type PropertyManager implements User {
	    id: Int!
	    firstName: String
	    lastName: String
	    company: PropertyManagementCompany
	    properties: [Property]
	}
	type Renter implements User {
	    id: Int!
	    firstName: String
	    lastName: String
	    conversations: [Conversation]
	    tennantOf: Unit
	}
	type Conversation {
	    id: Int!
	    messages: [Message]
	}
	type Message {
	    text: String
	    conversation: Conversation
	    sender: User
	}
	# queries
	type Query {
	    currentRenter: Renter
	}
	# we need to tell the server which types represent the root query
	# and root mutation types. We call them RootQuery and RootMutation by convention.
	schema {
	  query: Query
	}
`;

// koaBody is needed just for POST.
router.post('/graphql', koaBody(), graphqlKoa({ schema: myGraphQLSchema }));
router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);