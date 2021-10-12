import { Row, Container, Col, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import product_types from '../mock_data/categories';

const Navbar = () => (
    <Container fluid className="nav-wrapper py-3 sticky-top">
        <Row>
            <Link href="/" passHref>
                <Col className="header-title" style={{cursor: 'pointer'}}>
                    <h1 className="text-center">MAKEUP & CO.</h1>
                </Col>
            </Link>
        </Row>
        <Nav className="justify-content-center px-lg-5">
            <Nav.Item>
                <Link href="/" passHref>
                    <Nav.Link>Home</Nav.Link>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/products" passHref>
                    <Nav.Link>All Products</Nav.Link>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <NavDropdown title="Categories" id="categories-dropdown">
                    {product_types.map(type => (
                        <Link key={type.ref} href={`products?product_type=${type.ref}`} passHref>
                            <NavDropdown.Item>
                                {type.name}
                            </NavDropdown.Item>
                        </Link>
                    ))}
                </NavDropdown>
            </Nav.Item>
        </Nav>
    </Container>
)

export default Navbar;