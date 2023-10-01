import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';

import { ContactProvider } from '@/contexts/contact';
import { client } from '@/lib/appolo-client';
import defaultSEOConfig from '../../next-seo.config';

import type { AppProps } from 'next/app';

import '@fontsource/nunito-sans';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <DefaultSeo {...defaultSEOConfig} />
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </ApolloProvider>
  );
};

export default MyApp;
