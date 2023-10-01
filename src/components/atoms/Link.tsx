import { css } from '@emotion/react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={css({
        color: '#03AC0E',
        textDecoration: 'none',
        borderBottom: '1px solid #03AC0E',
      })}>
      {children}
    </a>
  );
};

export default Link;
