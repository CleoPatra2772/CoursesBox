import { setupServer } from "msw/node";

import { handlers } from './handlers';

//This configures a request mocking server with the given reuest handlers.

export const server = setupServer(...handlers);
