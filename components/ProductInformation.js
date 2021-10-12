import { Col, Container, Row } from "react-bootstrap"

const ProductInformation = ({description, tags}) => {
    return (
        <section className="bg-secondary py-5">
          <Container className="text-primary">
              <Row>
                  <Col md={6}>
                      <h4 className="product-title text-center mb-3">Description: </h4>
                      <p className="product-description text-center">{description}</p>
                  </Col>
                  <Col>
                      <h4 className="product-title text-center mb-3">Tags</h4>
                      {(tags || []).map(t => <p className="product-description text-center mb-0" key={t}>{t}</p>)}
                  </Col>
              </Row>
          </Container>  
        </section>
    )
}

export default ProductInformation