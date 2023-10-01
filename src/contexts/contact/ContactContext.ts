import { createContext } from 'react';

import { ContactDetail, ContactPayload } from '@/types/contact';

type Context = {
  favorites: {
    data: ContactDetail[];
    isLoading: boolean;
  };
  regulars: {
    data: ContactDetail[];
    isLoading: boolean;
  };
  create: (payload: ContactPayload) => void;
  destroy: (id: number) => void;
  toggle: (payload: ContactDetail) => void;
};

export const ContactContext = createContext<Context>({
  favorites: { data: [], isLoading: false },
  regulars: { data: [], isLoading: false },
  create: () => null,
  destroy: () => null,
  toggle: () => null,
});
