import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    alias: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    isDeleted: {
      type: GraphQLString
    },
    downloadCount: {
      type: GraphQLInt
    },
    descriptions: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    }
  }
});