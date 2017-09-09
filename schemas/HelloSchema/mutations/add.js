
import { GraphQLNonNull } from 'graphql';

import HelloType from '../types/Hello.js';
import HelloAddInput from '../types/HelloAddInput.js';
import HelloModel from '../../../models/HelloModel';

const add = {
  type: HelloType,
  args: {
    info: {
      name: 'info',
      type: new GraphQLNonNull(HelloAddInput)
    }
  },
  async resolve (root, params, options) {

    const HelloModel = new HelloModel(params.info);
    const newHello = await HelloModel.save();

    if (!newHello) {
      return false;
    }

    return newHello;
  }
};

export default add;