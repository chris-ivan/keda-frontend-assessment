import { rest } from 'msw';
import { DUMMY_SUCCESS_RESPONSE } from './dummyData';

const ENDPOINT = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const handlers = [
  rest.post(`${ENDPOINT}/v1/dummy-login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY_SUCCESS_RESPONSE));
  }),
];
