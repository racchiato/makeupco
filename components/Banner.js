import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => (
    <Container className="my-3">
        <Row>
            <Col md={6} sm={12} className="my-auto banner-text">
                <h1>
                    Shop From No. 1 Online Retailer
                </h1>
                <h4>Free Worldwide Shipping*</h4>
            </Col>
            <Col>
                <img src="https://cdn-2.tstatic.net/bali/foto/bank/images/make-up_20180127_171305.jpg" className="img-fluid" />
            </Col>
        </Row>
    </Container>
)

export default Banner;