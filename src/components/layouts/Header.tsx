import { css } from '@emotion/react';

const Header = () => {
  return (
    <header
      css={css({
        position: 'fixed',
        width: '100%',
        color: 'white',
        backgroundColor: '#03AC0E',
        zIndex: 1,
        top: 0,
      })}>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 8px',
        })}>
        <h2>Phonebook</h2>
      </div>
    </header>
  );
};

export default Header;
