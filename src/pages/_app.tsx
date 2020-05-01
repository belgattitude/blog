import React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { globalStyles } from '../styles/styles';

import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
