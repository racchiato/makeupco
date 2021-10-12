import { Row } from 'react-bootstrap'
import Shade from './Shade'

const ColorShades = ({colors}) => {
    return (
        <div className="mt-4">
            <h5 className="product-description">Available Shades:</h5>
            <Row>
                {colors.map(color => <Shade key={color.colour_name} color={color} />)}
            </Row>
        </div>
    )
}

export default ColorShades