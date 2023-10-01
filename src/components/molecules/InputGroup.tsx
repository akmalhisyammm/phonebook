import { css } from '@emotion/react';
import { forwardRef } from 'react';

type InputGroupProps = {
  icon?: React.ReactNode;
  label?: string;
  isError?: boolean;
  [key: string]: unknown;
};

const InputGroup = (
  { icon, label, isError, ...rest }: InputGroupProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  return (
    <div
      css={css({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      })}>
      {!!icon && (
        <span
          css={css({
            position: 'absolute',
            padding: 14,
            color: '#BFC9D9',
          })}>
          {icon}
        </span>
      )}
      {!!label && <label css={css({ marginBottom: 4 })}>{label}</label>}
      <input
        ref={ref}
        css={css({
          padding: icon ? '12px 12px 12px 40px' : 12,
          fontSize: 16,
          borderRadius: 8,
          border: !isError ? '1px solid #BFC9D9' : '1px solid #F94D63',
          outline: 'none',
          width: '100%',
          '&:focus': {
            border: !isError ? '2px solid #03AC0E' : '2px solid #F94D63',
          },
        })}
        {...rest}
      />
    </div>
  );
};

export default forwardRef(InputGroup);
