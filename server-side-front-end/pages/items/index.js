import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';
import { api } from '../../config/config';
import Breadcrum from '../../components/Breadcrum';
import NotFoundCard from '../../components/NotFoundCard';

function Items({ items = [], categories = [] }) {
  const router = useRouter();
  const search = router.query?.search || '';
  return (
    <Layout className='container'>
      <Head>
        <title>{search} | Mercado Libre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Breadcrum categories={categories} />
        {items.length > 0 ? (
          <ProductsList products={items} />
        ) : (
          <NotFoundCard />
        )}
      </section>
    </Layout>
  );
}

Items.getInitialProps = async ({ query }) => {
  try {
    const result = await axios.get(`${api.itemsList}${query.search}`);
    return { ...result.data };
  } catch (error) {
    console.log(
      '🚀 ~ file: index.js ~ line 30 ~ Items.getInitialProps= ~ error'
    );
  }
  return { error: true };
};

export default Items;
