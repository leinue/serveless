import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'HelloAddInput',
  fields: {
    email: {
      type: GraphQLString
    },
    lastIP: {
      type: GraphQLString
    }
  }
});