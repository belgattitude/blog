import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import { EventEmitter } from 'events';
import healthCheckRoute from '_pages/api/_healthcheck';

const formatYmd = (dateStr: string) => {
  const date = new Date(Date.parse(dateStr));
  return date.toISOString().split('T')[0];
};

describe('/api/_healthcheck', () => {
  it('should reply with 200 and a valid payload ', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>(
      {},
      {
        eventEmitter: EventEmitter,
      }
    );
    req._setMethod('GET');
    await healthCheckRoute(req, res);

    const response = res._getJSONData();

    expect(res._getStatusCode()).toBe(200);
    expect(response).toHaveProperty('success');
    expect(response.success).toBeTruthy();
    // Yes it can theoretically fail between 23:59:59 and 0:0:0
    expect(formatYmd(response.timestamp)).toBe(formatYmd(new Date().toISOString()));
  });
});
