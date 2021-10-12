import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap"
import brands from "../mock_data/brands"

const BrandsBanner = () => (
    <section className="bg-primary">
        <Container className="py-5">
        <Row className="mb-3">
            <Col className="banner-text text-center text-secondary">
                <h1>SHOP BY BRANDS</h1>
            </Col>
        </Row>
        <Row>
            {brands.map(brand => (
                <Link  href={`products?brand=${brand}`} passHref>
                    <Col className="brand-box py-5" key={brand} md={3} xs={6}>
                        <div className="my-auto text-center">
                            <a className="fw-bold" href={`products?brand=${brand}`}>
                                <h4>{brand}</h4>
                            </a>
                        </div>
                    </Col>
                </Link>
            ))}
        </Row>
    </Container>
    </section>
)

export default BrandsBanner;