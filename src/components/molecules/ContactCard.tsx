import { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { FaStar, FaRegStar, FaTrashAlt, FaEdit } from 'react-icons/fa';

import { ContactContext } from '@/contexts/contact';
import { IconButton } from '@/components/atoms';
import { ConfirmationModal } from '@/components/molecules';

import type { ContactDetail } from '@/types/contact';
import { useRouter } from 'next/router';

type ContactCardProps = {
  type: 'favorite' | 'regular';
  contact: ContactDetail;
};

const ContactCard = ({ type, contact }: ContactCardProps) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

  const { destroyContact, toggleFavorite } = useContext(ContactContext);

  const router = useRouter();

  return (
    <div>
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
            onClick={() => toggleFavorite(contact)}
          />
          <IconButton
            variant="ghost"
            icon={<FaEdit />}
            aria-label="edit contact"
            onClick={() => router.push(`/edit/${contact.id}`)}
          />
          <IconButton
            variant="ghost"
            color="secondary"
            icon={<FaTrashAlt />}
            aria-label="delete contact"
            onClick={() => setIsShowDeleteModal(true)}
          />
        </div>
      </div>
      <ConfirmationModal
        isOpen={isShowDeleteModal}
        name={contact.first_name + ' ' + contact.last_name}
        action={() => destroyContact(contact.id)}
        onDismiss={() => setIsShowDeleteModal(false)}
      />
    </div>
  );
};

export default ContactCard;
