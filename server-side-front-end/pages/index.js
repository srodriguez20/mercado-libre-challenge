import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout className='container'>
      <Head>
        <title>Mercado Libre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
}
