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
  const addContact = useContactMutation({ type: 'create' });
  const deleteContact = useContactMutation({ type: 'delete' });

  const create = (payload: ContactPayload) => {
    addContact.action({ variables: payload });
  };

  const destroy = (id: number) => {
    deleteContact.action({ variables: { id } });
  };

  const toggle = (payload: ContactDetail) => {
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
        create,
        destroy,
        toggle,
      }}>
      {children}
    </ContactContext.Provider>
  );
};
