import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList
} from 'graphql';

import mutations from './mutations';
import queries from './queries';

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  })
});

export default schema;
