import Head from 'next/head';
import axios from 'axios';
import Layout from '../../components/Layout';
import { api } from '../../config/config';
import Breadcrum from '../../components/Breadcrum';
import ProductDetail from '../../components/ProductDetail';
import NotFoundCard from '../../components/NotFoundCard';

function ItemById({ item, categories = [], search }) {
  return (
    <Layout className='container'>
      <Head>
        <title>{item?.title || ''} | Mercado Libre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Breadcrum categories={categories} />
        {item ? <ProductDetail product={item} /> : <NotFoundCard />}
      </section>
    </Layout>
  );
}

ItemById.getInitialProps = async ({ query }) => {
  try {
    const itemId = query.id.split('-');
    const result = await axios.get(`${api.itemDescription}${itemId[0]}`);
    return { ...result.data };
  } catch (error) {
    console.log(
      '🚀 ~ file: [id].js ~ line 30 ~ Items.getInitialProps= ~ error'
    );
  }
  return { error: true };
};

export default ItemById;
