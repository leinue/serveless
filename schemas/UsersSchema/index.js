import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

let count = 1;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'UserQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'UserMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        resolve: function() {
          count += 1;
          return count;
        }
      }
    }
  })
});

export default schema;
