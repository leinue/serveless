
import { GraphQLList, GraphQLString } from 'graphql';

import HelloType from '../types/Hello.js';
import HelloModel from '../../../models/HelloModel';

const hello = {
	type: new GraphQLList(HelloType),
	async resolve (root, params, options) {
  		var hello = await HelloModel.find({});
  		return hello;
	}
}

export default hello;