import { useRouter } from 'next/router';

import { useContactMutation, useContactQuery } from '@/hooks/contact';
import { ContactContext } from './ContactContext';

import type { ContactDetail, ContactPayload } from '@/types/contact';

type ContactProviderProps = {
  children: React.ReactNode;
};

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const router = useRouter();
  const { limit, offset, order, search } = router.query;

  const favorites: ContactDetail[] =
    typeof window !== 'undefined' && window.localStorage
      ? JSON.parse(localStorage.getItem('favorites') || '[]')
      : [];

  const filteredFavorites = useContactQuery({
    type: 'favorite',
    order: order?.toString(),
    search: search?.toString(),
  });
  const filteredRegulars = useContactQuery({
    type: 'regular',
    limit: Number(limit),
    offset: Number(offset),
    order: order?.toString(),
    search: search?.toString(),
  });
  const addContact = useContactMutation({ type: 'create_contact' });
  const addPhoneNumber = useContactMutation({ type: 'create_phone_number' });
  const editContact = useContactMutation({ type: 'update_contact' });
  const editPhoneNumber = useContactMutation({ type: 'update_phone_number' });
  const deleteContact = useContactMutation({ type: 'delete_contact' });

  const createContact = (payload: ContactPayload) => {
    addContact.action({ variables: payload });
  };

  const createPhoneNumber = (id: number, payload: { number: string }) => {
    addPhoneNumber.action({ variables: { contact_id: id, phone_number: payload.number } });
  };

  const updateContact = (
    id: number,
    payload: {
      first_name?: string;
      last_name?: string;
      old_phone_number?: string;
      new_phone_number?: string;
    },
  ) => {
    editContact.action({
      variables: { id, _set: { first_name: payload.first_name, last_name: payload.last_name } },
    });
  };

  const updatePhoneNumber = (
    id: number,
    payload: {
      old_number?: string;
      new_number?: string;
    },
  ) => {
    console.log({
      pk_columns: { number: payload.old_number, contact_id: id },
      new_phone_number: payload.new_number,
    });
    editPhoneNumber.action({
      variables: {
        pk_columns: { number: payload.old_number, contact_id: id },
        new_phone_number: payload.new_number,
      },
    });
  };

  const destroyContact = (id: number) => {
    deleteContact.action({ variables: { id } });
  };

  const toggleFavorite = (payload: ContactDetail) => {
    const newFavorites = favorites.map((contact) => contact.id).includes(payload.id)
      ? favorites.filter((contact) => contact.id !== payload.id)
      : [...favorites, payload];

    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    filteredFavorites.refetch();
    filteredRegulars.refetch();
  };

  return (
    <ContactContext.Provider
      value={{
        favorites: {
          data: filteredFavorites.data?.contact || [],
          isLoading: filteredFavorites.loading,
        },
        regulars: {
          data: filteredRegulars.data?.contact || [],
          isLoading: filteredRegulars.loading,
        },
        createContact,
        createPhoneNumber,
        updateContact,
        updatePhoneNumber,
        destroyContact,
        toggleFavorite,
      }}>
      {children}
    </ContactContext.Provider>
  );
};
