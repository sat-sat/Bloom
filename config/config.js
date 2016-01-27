'use-strict';

import _ from 'lodash';

export default _.extend(
  require('./env/default'),
  require('./env/' + process.env.NODE_ENV + '.js')
)