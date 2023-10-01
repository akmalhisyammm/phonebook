import { css } from '@emotion/react';

import { Link } from '@/components/atoms';

const Footer = () => {
  return (
    <footer css={css({ textAlign: 'center', padding: '0 8px', maxWidth: 1200, margin: '0 auto' })}>
      <hr
        css={css({
          margin: '24px 0',
          border: 'none',
          borderBottom: '1px solid #BFC9D9',
        })}
      />
      <p>
        &copy; 2023 - <Link href="https://akmalhisyam.my.id/">Muhammad Akmal Hisyam</Link>
      </p>
    </footer>
  );
};

export default Footer;
