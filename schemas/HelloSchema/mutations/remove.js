
import { GraphQLList, GraphQLString } from 'graphql';

import HelloType from '../types/Hello.js';
import HelloModel from '../../../models/HelloModel';

const remove = {
  type: new GraphQLList(HelloType),
  args: {
    ids: {
      name: 'ids',
      type: new GraphQLList(GraphQLString)
    }
  },
  async resolve (root, params, options) {

    let removedList = [];

    for (var i = 0; i < params.ids.length; i++) {
      const _id = params.ids[i];
      const removed = await HelloModel.findOneAndRemove({
        _id
      });

      if(removed) {
        removedList.push(removed)
      }
    };

    return removedList;
  }
}

export default remove