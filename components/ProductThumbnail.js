import Link from 'next/link';
import { Col } from 'react-bootstrap';

const ProductThumbnail = ({product, isSecondary}) => (
    <Link href={`product/${product.id}`} passHref>
        <Col md={3} sm={6} xs={6} className={`${isSecondary ? 'bg-secondary' : 'bg-white'} py-2 text-center product-thumbnail`}>
            <img src={product.image_link} alt={product.name} className="product-img mb-3" loading="lazy"/>
            <p className="mb-1">{product.brand}</p>
            <p className="fw-bold mb-1 product-title">{product.name}</p>
            <p className="mb-1">{(product.rating || 0).toFixed(1)}/5.0</p>
            <p>{`${product.currency || 'USD'} ${product.price_sign || '$'}${product.price}`}</p>
        </Col>
    </Link>
)

export default ProductThumbnail;