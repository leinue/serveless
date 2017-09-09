import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

import HelloFields from './HelloFields';

export default new GraphQLInputObjectType({
  name: 'HelloUpdateInput',
  fields: HelloFields
});