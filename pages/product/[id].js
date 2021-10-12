import Navbar from '../../components/Navbar';
import axios from 'axios';
import { Row, Container, Col} from 'react-bootstrap';
import ColorShades from '../../components/ColorShades';
import ProductInformation from '../../components/ProductInformation';

export const getStaticPaths = async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    const products = res.data.result

    return {
        paths: products.map(p => ({ params: { id: p.id.toString() }})),
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const API_URL = process.env.NODE_
    const res = await axios.get(`http://localhost:3000/api/product/${params.id}`)
  
    const product = res.data.product || []
    return {
      props: {
        product
      }
    }
}


const Product = ({product}) => {
  return (
    <>
        <Navbar />
        <Container className="py-5">
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
        </Container>
        {(product.description || product.tag_list.length > 0) && <ProductInformation description={product.description} tags={product.tag_list} />}
    </>
  )
}

export default Product;
