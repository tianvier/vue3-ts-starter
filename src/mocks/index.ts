import { setupWorker } from 'msw';
import users from './users';
import products from './products';

const handlers = [...users, ...products];

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
