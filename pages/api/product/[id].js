import axios from 'axios';

const handler = async (req, res) => {
  let products
  const { id } = req.query
  try {
    const result = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
    products = result.data
  } catch(e) {
    console.log(e)
  }
  res.status(200).json({ product: products.find(p => p.id === parseInt(id)) })
}

export default handler;