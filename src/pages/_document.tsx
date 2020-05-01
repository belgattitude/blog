import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';

type Props = {
  ids: string[];
  css: string;
} & DocumentProps;

export default class MyDocument extends Document<Props> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style data-emotion-css={this.props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
