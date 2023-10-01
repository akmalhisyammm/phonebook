import { useQuery } from '@apollo/client';

import { GET_CONTACT_LIST } from '@/constants/query';
import { ContactDetail } from '@/types/contact';

type ContactQueryProps = {
  type: 'favorite' | 'regular';
  limit?: number;
  offset?: number;
  order?: string;
  search?: string;
};

export const useContactQuery = ({ type, limit, offset, order, search }: ContactQueryProps) => {
  const favorites: ContactDetail[] =
    typeof window !== 'undefined' && window.localStorage
      ? JSON.parse(localStorage.getItem('favorites') || '[]')
      : [];

  const { data, loading, error, networkStatus, refetch } = useQuery(GET_CONTACT_LIST, {
    variables: {
      offset: offset || 0,
      limit: limit || 10,
      order_by: { first_name: order || 'asc' },
      where: {
        id:
          type === 'favorite'
            ? { _in: favorites.map((contact) => contact.id) }
            : { _nin: favorites.map((contact) => contact.id) },
        _or: [
          { first_name: { _ilike: `%${search || ''}%` } },
          { last_name: { _ilike: `%${search || ''}%` } },
        ],
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  return { data, loading, error, networkStatus, refetch };
};
