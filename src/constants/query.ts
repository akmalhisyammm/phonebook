import { gql } from '@apollo/client';

export const GET_CONTACT_LIST = gql`
  query GetContactList(
    $limit: Int
    $offset: Int
    $order_by: [contact_order_by!]
    $where: contact_bool_exp
  ) {
    contact(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
      id
      first_name
      last_name
      phones {
        number
      }
      created_at
    }
  }
`;
