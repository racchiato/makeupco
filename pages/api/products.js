import axios from 'axios';

const handler = async (req, res) => {
  let products
  try {
    const {keyword, ...others} = req.query
    const result = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json', {
      params: {
        ...others
      }
    })
    products = result.data
    if (keyword) {
      products = products.filter(p => {
        return p.name.toLowerCase().includes(keyword.toLowerCase())
      })
    }
  } catch(e) {
    console.log(e)
  }
  res.status(200).json({ result: products })
}

export default handler;