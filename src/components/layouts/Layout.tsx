import { css } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={css({ minHeight: '100vh', paddingBottom: 100 })}>
      <Header />
      <main
        css={css({
          position: 'relative',
          maxWidth: '1200px',
          margin: '28px auto',
          padding: '0 8px',
          marginBottom: 100,
          top: 70,
        })}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
