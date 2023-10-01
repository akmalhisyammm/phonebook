import { useContext } from 'react';
import { css } from '@emotion/react';

import { ContactContext } from '@/contexts/contact';
import { ContactCard } from '@/components/molecules';

const FavoriteContactList = () => {
  const { favorites } = useContext(ContactContext);

  return (
    <div css={css({ margin: '12px 0' })}>
      <h2>Favorites</h2>
      {!favorites.isLoading ? (
        <div css={css({ display: 'flex', flexDirection: 'column', gap: 12 })}>
          {favorites.data.length ? (
            favorites.data.map((contact) => (
              <ContactCard key={contact.id} type="favorite" contact={contact} />
            ))
          ) : (
            <p>No favorite contact.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FavoriteContactList;
