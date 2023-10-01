import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { WEB_BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { ContactForm } from '@/components/organisms';
import { useContactQuery } from '@/hooks/contact';

const EditContact = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useContactQuery({ type: 'detail', id: Number(id) });
  const contact = data?.contact_by_pk;

  return (
    <Layout>
      <NextSeo
        title="Edit Contact"
        description="Edit contact in your contact list"
        canonical={`${WEB_BASE_URL}/edit/${id}`}
      />
      {!!contact && <ContactForm contact={contact} />}
    </Layout>
  );
};

export default EditContact;
