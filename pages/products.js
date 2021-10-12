import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Container, Form, Col, Accordion } from 'react-bootstrap';
import ProductThumbnail from '../components/ProductThumbnail';
import { Button } from 'react-bootstrap';
import product_types from '../mock_data/categories';
import brands from '../mock_data/brands';
import Skeleton from 'react-loading-skeleton';

export const getServerSideProps = async ({ query }) => {
    let params = {}
    const { product_type, brand } = query
    if (product_type) {
      params.product_type = product_type
    }
    if (brand) {
      params.brand = brand
    }
    const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json', { params })
    const products = res.data || []
    return {
      props: {
        products,
        product_type: product_type || '',
        brand: brand || ''
      }
    }
}


const Products = ({products, product_type, brand}) => {
  const [currentProducts, setProducts] = useState(products)
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState({
      keyword: '',
      product_type: product_type,
      brand: brand,
      price_greater_than: '',
      price_less_than: '',
      rating_greater_than: '',
      rating_less_than: ''
  })

  const getProducts = async () => {
    console.log(params)
    const { keyword, ...others } = params;

    await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json', {
        params: {
          ...others,
          rating_greater_than: params.rating_greater_than,
          rating_less_than: params.rating_less_than
        },
        paramsSerializer: (params) => {
          let result = '';
          Object.keys(params).forEach(key => {
              result += `${key}=${encodeURIComponent(params[key])}&`;
          });
          return result.substr(0, result.length - 1)
        }
      }).then(res => {
        let result = res.data
        if (keyword) {
          result = result.filter(p => p.name.includes(keyword))
        }
        setProducts(result)
        setLoading(false)
      })
  }

  const applyFilter = () => {
      setLoading(true);
  }

  useEffect(() => {
      if (loading) {
        getProducts()
      }
  }, [currentProducts, loading])

  return (
    <Layout title={product_type ? `${product_types.find(t => t.ref === product_type).name} - Products` : 'Search Products'}>
      <Container className="py-5">
          <Row className="my-3">
              <Col md={3} className="mb-5">
                <div className="sticky-sidebar">
                <h4 className="text-primary">Search Products</h4>
                <Form.Control onKeyDown={(e) => e.key === 'Enter' && applyFilter()} onInput={(e) => setParams({...params, keyword: e.target.value})} value={params.keyword} type="text" placeholder="Input Keyword" />
                <Accordion className="my-3" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Advanced Filter</Accordion.Header>
                        <Accordion.Body>
                            <div className="mb-4">
                                <h5>Product Type</h5>
                                <Form.Select onChange={e => setParams({...params, product_type: e.target.value})}>
                                    <option selected={!params.product_type} hidden>Select Product Type</option>
                                    <option value=''>all</option>
                                    {product_types.map(type => (
                                        <option selected={type.ref === params.product_type} key={type.ref} value={type.ref}>{type.name}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className="mb-4">
                                <h5>Brands</h5>
                                <Form.Select onChange={e => setParams({...params, brand: e.target.value})}>
                                    <option selected={!params.brand} hidden>Select Brands</option>
                                    <option value=''>all</option>
                                    {brands.map(brand => (
                                        <option selected={brand === params.brand} key={brand} value={brand}>{brand}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-2">Price</h5>
                                <p className="mb-1">Greater Than</p>
                                <Form.Control className="mb-3" onInput={e => setParams({...params, price_greater_than: e.target.value})} type="number" value={params.price_greater_than || 0} min="0"/>
                                <p className="mb-1">Less Than</p>
                                <Form.Control type="number" onInput={e => setParams({...params, price_less_than: e.target.value})} value={params.price_less_than || 1000000} min="10" max="100000" />
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-2">Rating</h5>
                                <p className="mb-1">Greater Than</p>
                                <Form.Control className="mb-3" onInput={e => setParams({...params, rating_greater_than: e.target.value})} type="number" value={params.rating_greater_than || 0} min="0" max="4"/>
                                <p className="mb-1">Less Than</p>
                                <Form.Control type="number" onInput={e => setParams({...params, rating_less_than: e.target.value})} value={params.rating_less_than || 6} min="1" max="5" />
                                <Button className="w-100 mt-2" onClick={applyFilter}>Apply Filter</Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
              </Col>
              <Col>
               <Row>
                  {loading ? <Skeleton width={"100%"} /> : currentProducts.map((p, i) => <ProductThumbnail product={p} key={i} />)}
                </Row>
              </Col>
          </Row>
      </Container>
    </Layout>
  )
}

export default Products;
