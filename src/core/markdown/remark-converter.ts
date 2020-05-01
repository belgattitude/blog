import { IMarkdownConverter } from './markdown.interface';

import remark from 'remark';
import html from 'remark-html';

export class RemarkConverter implements IMarkdownConverter {
  async toHtml(markdown: string): Promise<string> {
    const result = await remark()
      .use(html as any)
      .process(markdown);
    return result.toString();
  }
}
