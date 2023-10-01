import { css } from '@emotion/react';

type IconButtonProps = {
  icon: React.ReactNode;
  variant: 'primary' | 'secondary';
  color: 'primary' | 'secondary';
  isFullWidth?: boolean;
  [key: string]: unknown;
};

const IconButton = ({ icon, variant, color, isFullWidth, ...rest }: IconButtonProps) => {
  return (
    <button
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 14px',
        width: isFullWidth ? '100%' : 'auto',
        fontSize: 20,
        borderRadius: 8,
        border: variant === 'primary' ? '1px solid #03AC0E' : 'transparent',
        backgroundColor:
          variant === 'primary' ? (color === 'primary' ? '#03AC0E' : '#F94D63') : 'transparent',
        color: variant === 'primary' ? 'white' : color === 'primary' ? '#03AC0E' : '#F94D63',
        cursor: 'pointer',
        transition: 'all 0.2s ease-out',
        '&:hover': {
          opacity: 0.8,
        },
        '&:active': {
          opacity: 0.6,
        },
        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',
        },
      })}
      {...rest}>
      <span css={css({ paddingTop: 3 })}>{icon}</span>
    </button>
  );
};

export default IconButton;
