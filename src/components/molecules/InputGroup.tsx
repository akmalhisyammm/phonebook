import { css } from '@emotion/react';

type InputGroupProps = {
  icon: React.ReactNode;
  [key: string]: unknown;
};

const InputGroup = ({ icon, ...rest }: InputGroupProps) => {
  return (
    <div
      css={css({
        position: 'relative',
        display: 'flex',
        width: '100%',
      })}>
      <span
        css={css({
          position: 'absolute',
          padding: 14,
          color: '#BFC9D9',
        })}>
        {icon}
      </span>
      <input
        css={css({
          padding: '12px 12px 12px 40px',
          fontSize: 16,
          borderRadius: 8,
          border: '1px solid #BFC9D9',
          outline: 'none',
          width: '100%',
          '&:focus': {
            border: '2px solid #03AC0E',
          },
        })}
        {...rest}
      />
    </div>
  );
};

export default InputGroup;
