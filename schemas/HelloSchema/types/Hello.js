import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

import HelloFields from './HelloFields';

export default new GraphQLObjectType({
  name: 'Hello',
  fields: HelloFields
});