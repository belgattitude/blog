beforeAll(async () => {
  // enhance with scroll
  window.HTMLElement.prototype.scroll = jest.fn();
});

afterAll(async () => {});
