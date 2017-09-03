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
        async resolve (root, params, options) {
          const UsersModel = new UsersModel({count: 10});
          const newUser = await UsersModel.save();

          if (!newUser) {
            throw new Error('Error adding new comment');
          }
          return newUser;
        }
      }
    }
  })
});

export default schema;
