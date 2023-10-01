import { createContext } from 'react';

import type { ContactDetail, ContactPayload } from '@/types/contact';

type Context = {
  favorites: {
    data: ContactDetail[];
    isLoading: boolean;
  };
  regulars: {
    data: ContactDetail[];
    isLoading: boolean;
  };
  createContact: (payload: ContactPayload) => void;
  createPhoneNumber: (id: number, payload: { number: string }) => void;
  updateContact: (
    id: number,
    payload: {
      first_name?: string;
      last_name?: string;
    },
  ) => void;
  updatePhoneNumber: (
    id: number,
    payload: {
      old_number: string;
      new_number: string;
    },
  ) => void;
  destroyContact: (id: number) => void;
  toggleFavorite: (payload: ContactDetail) => void;
};

export const ContactContext = createContext<Context>({
  favorites: { data: [], isLoading: false },
  regulars: { data: [], isLoading: false },
  createContact: () => null,
  createPhoneNumber: () => null,
  updateContact: () => null,
  updatePhoneNumber: () => null,
  destroyContact: () => null,
  toggleFavorite: () => null,
});
