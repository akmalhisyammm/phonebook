import { css } from '@emotion/react';

import { Button } from '@/components/atoms';

type ConfirmationModalProps = {
  isOpen: boolean;
  name: string;
  action: () => void;
  onDismiss: () => void;
};

const ConfirmationModal = ({ isOpen, name, action, onDismiss }: ConfirmationModalProps) => {
  return (
    <div
      css={css({
        position: 'fixed',
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      })}>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #BFC9D9',
          backgroundColor: 'white',
          padding: 18,
          borderRadius: 8,
          width: '100%',
          maxWidth: 400,
          height: 'fit-content',
          margin: '0 8px',
        })}>
        <h2 css={css({ margin: '12px 0 0' })}>
          Delete <span css={css({ color: '#F94D63' })}>{name}</span>
        </h2>
        <p>Are you sure want to delete this contact?</p>
        <hr
          css={css({
            margin: '0 0 12px',
            border: 'none',
            borderTop: '1px solid #BFC9D9',
          })}
        />
        <div
          css={css({
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 8,
          })}>
          <Button
            color="secondary"
            onClick={() => {
              action();
              onDismiss();
            }}>
            Delete
          </Button>
          <Button onClick={onDismiss}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
