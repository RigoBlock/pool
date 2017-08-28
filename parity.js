// Copyright 2016-2017 RigoBlock.

import { Api } from '@parity/parity.js';

// do the setup

const { transport } = new Api.Transport.Http('http://localhost:8080');
const { api } = new Api(transport);

export {
  api
};
