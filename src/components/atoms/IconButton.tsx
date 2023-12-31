import { css } from '@emotion/react';

type IconButtonProps = {
  icon: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary';
  isFullWidth?: boolean;
  [key: string]: unknown;
};

const IconButton = ({
  icon,
  variant = 'contained',
  color = 'primary',
  isFullWidth,
  ...rest
}: IconButtonProps) => {
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
        border: variant !== 'ghost' ? '1px solid #03AC0E' : 'none',
        backgroundColor:
          variant === 'contained' ? (color === 'primary' ? '#03AC0E' : '#F94D63') : 'transparent',
        color: variant === 'contained' ? 'white' : color === 'primary' ? '#03AC0E' : '#F94D63',
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
