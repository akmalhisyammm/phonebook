import { css } from '@emotion/react';

type ButtonGroupProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  [key: string]: unknown;
};

const ButtonGroup = ({ icon, children, ...rest }: ButtonGroupProps) => {
  return (
    <button
      css={css({
        padding: '10px 14px',
        fontSize: 16,
        borderRadius: 8,
        border: '1px solid #03AC0E',
        backgroundColor: '#03AC0E',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        transition: 'all 0.2s ease-out',
        '&:hover': {
          opacity: 0.8,
        },
        '&:active': {
          opacity: 0.6,
        },
      })}
      {...rest}>
      <span css={css({ paddingTop: 3 })}>{icon}</span> {children}
    </button>
  );
};

export default ButtonGroup;
