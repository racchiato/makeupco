import axios from 'axios';
import { useRouter } from 'next/router'

import { Row, Container, Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import Layout from '../../../components/Layout';
import ColorShades from '../../../components/ColorShades';
import ProductInformation from '../../../components/ProductInformation';

// export const getStaticPaths = async () => {
//     const res = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
//     const products = res.data

//     return {
//         paths: products.slice(80, 129).map(p => ({ params: { id: p.id.toString() }})),
//         fallback: true
//     }
// }

export const getServerSideProps = async ({ params }) => {
    const { type, id } = params
    const res = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json', {
      params: {
        product_type: type
      }
    })
    const product = res.data || []
    return {
      props: {
        product: product.find(p => p.id.toString() == id)
      }
    }
}


const Product = ({product}) => {
  const router = useRouter()

  return (
    <Layout title={product.name}>
      <Container className="py-5">
          {router.isFallback ? (
            <Row>
              <Col>
                <h2 className="text-center">Fetching Product Details...</h2>
              </Col>
              <Col>
                <Skeleton width="100%" />
              </Col>
            </Row>
          ) : (
              <Row>
                  <Col md={6} className="text-center">
                      <img className="img-fluid" src={product.image_link} />
                  </Col>
                  <Col className="my-auto">
                      <h6 className="product-description">{product.brand.toUpperCase()}</h6>
                      <h3 className="mb-2 product-title">{product.name}</h3>
                      <h5>{`${product.currency || 'USD'} ${product.price_sign || '$'}${product.price}`}</h5>
                      {product.product_colors.length > 0 && <ColorShades colors={product.product_colors} />}
                  </Col>
              </Row>
            )
          }
      </Container>
      {(product.description || product.tag_list.length > 0) && <ProductInformation description={product.description} tags={product.tag_list} />}
    </Layout>
  )
}

export default Product;
