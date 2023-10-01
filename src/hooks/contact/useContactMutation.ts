import { useMutation } from '@apollo/client';

import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '@/constants/mutation';
import { GET_CONTACT_LIST } from '@/constants/query';

type ContactMutationProps = {
  type: 'create' | 'update' | 'delete';
};

export const useContactMutation = ({ type }: ContactMutationProps) => {
  const mutation = {
    create: ADD_CONTACT,
    update: EDIT_CONTACT,
    delete: DELETE_CONTACT,
  };

  const [action, { data, loading, error }] = useMutation(mutation[type], {
    refetchQueries: [GET_CONTACT_LIST, 'GetContactList'],
  });

  return { action, data, loading, error };
};
