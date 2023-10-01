import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
  mutation AddContact($first_name: String!, $last_name: String!, $phones: [phone_insert_input!]!) {
    insert_contact_one(
      object: { first_name: $first_name, last_name: $last_name, phones: { data: $phones } }
    ) {
      id
      first_name
      last_name
      phones {
        number
      }
    }
  }
`;

export const EDIT_CONTACT = gql`
  mutation EditContact($id: Int!, $_set: contact_set_input) {
    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      first_name
      last_name
      phones {
        number
      }
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation DeleteContact($id: Int!) {
    delete_contact_by_pk(id: $id) {
      id
      first_name
      last_name
    }
  }
`;
