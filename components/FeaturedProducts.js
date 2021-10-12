import { Container, Row } from "react-bootstrap"
import ProductThumbnail from "./ProductThumbnail"

const FeaturedProducts = ({ products, isSecondary }) => {
    const mockProducts = [
        {
            title: 'Product 1'
        },
        {
            title: 'Product 2'
        }
    ]

    return (
    <section className="featured-products py-5">
        <Container>
            <Row className="mb-5 fw-bold ml-2">
                <h1>FEATURED PRODUCTS</h1>
            </Row>
            <Row>
                {(products || mockProducts || []).map((p, i) => <ProductThumbnail key={i} isSecondary={isSecondary} product={p} />)}
            </Row>        
        </Container>
    </section>
    )
}

export default FeaturedProducts