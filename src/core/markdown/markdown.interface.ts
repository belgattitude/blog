export interface IMarkdownConverter {
  toHtml(markdown: string): Promise<string>;
}
