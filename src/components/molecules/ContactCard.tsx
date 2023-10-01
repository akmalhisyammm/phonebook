import { useContext } from 'react';
import { css } from '@emotion/react';
import { FaStar, FaRegStar, FaTrashAlt } from 'react-icons/fa';

import { ContactContext } from '@/contexts/contact';
import { IconButton } from '@/components/atoms';

import type { ContactDetail } from '@/types/contact';

type ContactCardProps = {
  type: 'favorite' | 'regular';
  contact: ContactDetail;
};

const ContactCard = ({ type, contact }: ContactCardProps) => {
  const contactCtx = useContext(ContactContext);

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        padding: '12px 18px',
        borderRadius: 8,
        border: '1px solid #BFC9D9',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      })}>
      <div>
        <h3>{contact.first_name + ' ' + contact.last_name}</h3>
        {contact.phones.map((phone) => (
          <p key={phone.number}>{phone.number}</p>
        ))}
      </div>
      <div css={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
        <IconButton
          variant="ghost"
          icon={type === 'favorite' ? <FaStar /> : <FaRegStar />}
          aria-label="toggle favorite"
          onClick={() => contactCtx.toggle(contact)}
        />
        <IconButton
          variant="ghost"
          color="secondary"
          icon={<FaTrashAlt />}
          aria-label="delete contact"
          onClick={() => contactCtx.destroy(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
