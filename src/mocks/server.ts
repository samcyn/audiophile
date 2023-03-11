// src/mocks/browser.js
import { setupServer } from 'msw/node';
import handlers from './handlers';

// This configures a Service Worker with the given request handlers.
const server = setupServer(...handlers);

export default server;
