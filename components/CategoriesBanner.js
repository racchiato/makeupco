import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap"
import product_types from "../mock_data/categories"

const CategoriesBanner = () => (
    <Container className="py-5">
        <Row className="mb-3">
            <Col className="banner-text text-center">
                <h1>SHOP BY CATEGORIES</h1>
            </Col>
        </Row>
        <Row>
            {product_types.map(type => (
                <Link key={type.ref} href={`products?product_type=${type.ref}`} passHref>
                <Col className="category-box py-5" md={3} xs={6}>
                    <div className="my-auto text-center">
                        <a className="fw-bold" href={`products?product_type=${type.ref}`}>
                            <h4>{type.name}</h4>
                        </a>
                    </div>
                </Col>
                </Link>
            ))}
        </Row>
    </Container>
)

export default CategoriesBanner;