import { useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Select, { type SingleValue } from 'react-select';

import { ContactContext } from '@/contexts/contact';
import { Button, IconButton } from '@/components/atoms';
import { ContactCard } from '@/components/molecules';

const RegularContactList = () => {
  const { regulars } = useContext(ContactContext);

  const router = useRouter();
  const { limit, offset } = router.query;

  const handleLimitSelectChange = (e: SingleValue<{ value: number; label: string }>) => {
    router.push({
      pathname: '/',
      query: { ...router.query, limit: e?.value || 10 },
    });
  };

  return (
    <div css={css({ margin: '12px 0' })}>
      <div css={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
        <h2>Regulars</h2>
        <Button icon={<FaPlus />} aria-label="add new contact" onClick={() => router.push('/add')}>
          New Contact
        </Button>
      </div>
      {!regulars.isLoading ? (
        <div css={css({ display: 'flex', flexDirection: 'column', gap: 12 })}>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            })}>
            <label css={css({ display: 'block', marginBottom: 4 })}>Show:</label>
            <Select
              aria-label="select limit"
              placeholder="Select Limit"
              value={{ value: Number(limit || 10), label: limit?.toString() || '10' }}
              options={[
                { value: 5, label: '5' },
                { value: 10, label: '10' },
                { value: 15, label: '15' },
                { value: 20, label: '20' },
              ]}
              styles={{
                control: (provided) => ({
                  ...provided,
                  padding: 4,
                  borderRadius: 8,
                }),
              }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: '#03AC0E',
                  primary25: '#EBFFEF',
                  primary50: '#80EB93',
                },
              })}
              css={css({ width: '100%' })}
              isClearable={false}
              isSearchable={false}
              onChange={handleLimitSelectChange}
            />
          </div>
          {regulars.data.length ? (
            regulars.data.map((contact) => (
              <ContactCard key={contact.id} type="regular" contact={contact} />
            ))
          ) : (
            <p>No regular contact.</p>
          )}
          <div css={css({ display: 'flex', gap: 12 })}>
            <IconButton
              icon={<FaChevronLeft />}
              aria-label="previous contact"
              disabled={!offset || Number(offset) === 0 || Number(offset) - 10 < 0}
              isFullWidth
              onClick={() =>
                router.push({
                  pathname: '/',
                  query: { ...router.query, offset: Number(offset || 10) - 10 },
                })
              }
            />
            <IconButton
              icon={<FaChevronRight />}
              aria-label="next contact"
              disabled={regulars.data.length < Number(limit || 10)}
              isFullWidth
              onClick={() =>
                router.push({
                  pathname: '/',
                  query: { ...router.query, offset: Number(offset || 0) + 10 },
                })
              }
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RegularContactList;
