import * as cookie from 'cookie';

import { Tedis } from 'tedis';

const db = new Tedis({
	host: '127.0.0.1',
	port: 6379
});

function 