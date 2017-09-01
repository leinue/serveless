import UsersModel from '../../models/UsersModel';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

import mongoose from 'mongoose';

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
