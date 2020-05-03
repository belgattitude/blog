import { RemarkConverter } from './remark-converter';

describe('RemarkConverter', () => {
  it('should convert', async () => {
    const converter = new RemarkConverter();
    const html = await converter.toHtml('# Cool');
    expect(html).toMatch(/^<h1>Cool<\/h1>/);
  });
});
