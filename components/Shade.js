import { Col, Row } from "react-bootstrap"

const Shade = ({color, key}) => {
    return (
        <Col key={key} className="swatch" sm={6}>
            <Row>
                <Col xs={1} className="swatch-color my-auto" style={{background: color.hex_value, height: 20, width: 20}}></Col>
                <Col className="my-auto">{color.colour_name}</Col>
            </Row>
        </Col>
    )
}

export default Shade