import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesBanner from '../components/CategoriesBanner';
import BrandsBanner from '../components/BrandsBanner';
import axios from 'axios';
import Layout from '../components/Layout';

export const getStaticProps = async () => {
  const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')

  const products = res.data.slice(90, 94)
  return {
    props: {
      products
    },
    revalidate: 300
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
