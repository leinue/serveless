
import { GraphQLNonNull } from 'graphql';

import HelloType from '../types/Hello.js';
import HelloModel from '../../../models/HelloModel';
import HelloUpdateInput from '../types/HelloUpdateInput.js';

const update = {
  type: HelloType,
  args: {
    options: {
      name: 'options',
      type: new GraphQLNonNull(HelloUpdateInput)
    }
  },
  async resolve (root, params, options) {

    const updated = await HelloModel.findOneAndUpdate({
      _id: params.options._id
    }, params.options);

    const hello = await HelloModel.findOne({
      _id: params.options._id
    });

    return hello;
  }
};

export default update