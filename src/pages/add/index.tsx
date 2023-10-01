import { NextSeo } from 'next-seo';

import { WEB_BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { ContactForm } from '@/components/organisms';

const AddContact = () => {
  return (
    <Layout>
      <NextSeo
        title="Add Contact"
        description="Add new contact to your contact list"
        canonical={`${WEB_BASE_URL}/add`}
      />
      <ContactForm />
    </Layout>
  );
};

export default AddContact;
