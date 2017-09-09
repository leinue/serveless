import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

export default {
  _id: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  lastIP: {
    type: GraphQLString
  }
}