import Head from 'next/head';
import Layout from '../../components/Layout';
import ProductsList from '../../components/ProductsList';
export default function Items() {
  const pageTitle = 'iphone';
  const productsList = [
    {
      id: 'MLA906695125',
      title: 'iPhone 11 64 Gb (product)red',
      price: 138000,
      thumbnail:
        'https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg',
      city: 'Buenos Aires',
      shipping: {
        free_shipping: true,
      },
    },
    {
      id: 'MLA906695126',
      title: 'iPhone 11 64 Gb (product)red',
      price: 138000,
      thumbnail:
        'http://http2.mlstatic.com/D_751765-MLA43654417389_102020-I.jpg',
      city: 'Buenos Aires',
      shipping: {
        free_shipping: true,
      },
    },
  ];
  return (
    <Layout className='container'>
      <Head>
        <title>{pageTitle} | Mercado Libre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <ProductsList products={productsList} />
      </section>
    </Layout>
  );
}
