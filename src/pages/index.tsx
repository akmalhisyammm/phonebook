import { Layout } from '@/components/layouts';
import { ContactFilter, FavoriteContactList, RegularContactList } from '@/components/organisms';

const Home = () => {
  return (
    <Layout>
      <ContactFilter />
      <FavoriteContactList />
      <RegularContactList />
    </Layout>
  );
};

export default Home;
