import UserModel from '../../models/UserModel';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLUnionType,
  GraphQLList
} from 'graphql';

import UserType from './types.js';

function getProjection (fieldASTs) {
  return fieldASTs.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;
    return projections;
  }, {});
}

let count = 1;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'UserQueryType',
    fields: {
      users: {
        type: new GraphQLList(UserType),
        async resolve (root, params, options) {
          var users = await UserModel.find({});
          return users;
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

          const userModel = new UserModel({count: 10});
          // const newUser = await userModel.save();

          userModel.save((err, user) => {

            if(err) {
              console.log(err);
            }

            console.log(user);

          });

          // console.log(newUser);

          // if (!newUser) {
          //   throw new Error('Error adding new comment');
          // }
          return 1;
        }
      }
    }
  })
});

export default schema;
