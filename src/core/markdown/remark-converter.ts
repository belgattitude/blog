import { IMarkdownConverter } from './markdown.interface';

import remark from 'remark';
import html from 'remark-html';
import codesandbox from 'remark-codesandbox';

export class RemarkConverter implements IMarkdownConverter {
  async toHtml(markdown: string): Promise<string> {
    const result = await remark()
      .use([html as any, [codesandbox as any, { mode: 'button' }]])
      .process(markdown);
    return result.toString();
  }
}
