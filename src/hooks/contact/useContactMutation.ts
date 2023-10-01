import { useMutation } from '@apollo/client';

import {
  ADD_CONTACT,
  ADD_PHONE_NUMBER,
  DELETE_CONTACT,
  EDIT_CONTACT,
  EDIT_PHONE_NUMBER,
} from '@/constants/mutation';
import { GET_CONTACT_LIST } from '@/constants/query';

type ContactMutationProps = {
  type:
    | 'create_contact'
    | 'create_phone_number'
    | 'update_contact'
    | 'update_phone_number'
    | 'delete_contact';
};

export const useContactMutation = ({ type }: ContactMutationProps) => {
  const mutation = {
    create_contact: ADD_CONTACT,
    create_phone_number: ADD_PHONE_NUMBER,
    update_contact: EDIT_CONTACT,
    update_phone_number: EDIT_PHONE_NUMBER,
    delete_contact: DELETE_CONTACT,
  };

  const [action, { data, loading, error }] = useMutation(mutation[type], {
    refetchQueries: [GET_CONTACT_LIST, 'GetContactList'],
  });

  return { action, data, loading, error };
};
