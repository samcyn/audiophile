import matchers from '@testing-library/jest-dom/matchers';
import {
  afterAll,
  afterEach,
  beforeAll,
  expect,
} from 'vitest';

import worker from './mocks/server';

expect.extend(matchers);

beforeAll(() =>
  worker.listen({
    onUnhandledRequest: 'error',
  })
);
afterAll(() => worker.close());
afterEach(() => worker.resetHandlers());
