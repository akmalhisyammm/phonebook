import { css } from '@emotion/react';

type ButtonProps = {
  icon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  [key: string]: unknown;
};

const Button = ({
  icon,
  variant = 'contained',
  color = 'primary',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      css={css({
        padding: '10px 14px',
        fontSize: 16,
        borderRadius: 8,
        border:
          variant !== 'ghost'
            ? color === 'primary'
              ? '1px solid #03AC0E'
              : '1px solid #F94D63'
            : 'none',
        backgroundColor:
          variant === 'contained' ? (color === 'primary' ? '#03AC0E' : '#F94D63') : 'transparent',
        color: variant === 'contained' ? 'white' : color === 'primary' ? '#03AC0E' : '#F94D63',
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
      {!!icon && <span css={css({ paddingTop: 3 })}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
