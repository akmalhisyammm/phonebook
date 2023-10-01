import { css } from '@emotion/react';

import { Link } from '@/components/atoms';

const Footer = () => {
  return (
    <footer css={css({ textAlign: 'center', padding: '0 8px' })}>
      <p>
        &copy; 2023 - <Link href="https://akmalhisyam.my.id/">Muhammad Akmal Hisyam</Link>
      </p>
    </footer>
  );
};

export default Footer;
