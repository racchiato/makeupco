import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesBanner from '../components/CategoriesBanner';
import BrandsBanner from '../components/BrandsBanner';
import axios from 'axios';
import Layout from '../components/Layout';

export const getStaticProps = async (context) => {
  const res = await axios.get('http://localhost:3000/api/products')

  const products = res.data.result.slice(90, 94)
  return {
    props: {
      products
    },
    revalidate: 60
  }
}

const Home = ({ products }) => {
  return (
    <Layout>
      <Banner />
      <FeaturedProducts products={products} isSecondary={true} />
      <CategoriesBanner />
      <BrandsBanner />
    </Layout>
  )
}

export default Home;
