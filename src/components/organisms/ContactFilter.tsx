import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { FaSearch, FaSortAmountUp, FaSortAmountDownAlt } from 'react-icons/fa';

import { IconButton } from '@/components/atoms';
import { InputGroup } from '@/components/molecules';

const ContactFilter = () => {
  const router = useRouter();
  const { order, search } = router.query;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    router.push({
      pathname: '/',
      query: { ...router.query, search: value },
    });
  };

  return (
    <div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 8,
          width: '100%',
        })}>
        <InputGroup
          type="text"
          placeholder="Search Contact Name"
          icon={<FaSearch />}
          aria-label="search contact"
          value={search || ''}
          onChange={handleSearchInputChange}
        />
        <IconButton
          variant="outlined"
          icon={order === 'desc' ? <FaSortAmountUp /> : <FaSortAmountDownAlt />}
          aria-label="sort contact"
          onClick={() =>
            router.push({
              pathname: '/',
              query: { ...router.query, order: order === 'desc' ? 'asc' : 'desc' },
            })
          }
        />
      </div>
    </div>
  );
};

export default ContactFilter;
