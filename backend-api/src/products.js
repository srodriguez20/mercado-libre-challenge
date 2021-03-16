const axios = require('axios');
const API_URL = 'https://api.mercadolibre.com';
const SEARCH_ENDPOINT = '/sites/MLA/search';
const ITEMS_ENDPOINT = '/items/';
const ITEMS_DESC_ENDPOINT = '/decription';
const SEARCH_API_URL = `${API_URL}${SEARCH_ENDPOINT}`;
const limit = 4;

const categoryBuilder = () => {
  const caterories = [];
};

const fetchProductsList = async (req, res) => {
  try {
    const query = req.query.q;
    const result = await axios.get(
      `${SEARCH_API_URL}?q=${query}&limit=${limit}`
    );
    console.log(
      '🚀 ~ file: products.js ~ line 20 ~ fetchProductsList ~ result',
      result
    );

    const exists = true;
    if (exists) {
      return res.status(200).send(result.data);
    } else {
      return res.status(404).send({ msg: `products not found` });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const fetchProductById = async (req, res) => {
  try {
    const exists = true;
    if (exists) {
      let productsList = ['product 1', 'product 2'];

      return res.status(200).send(productsList);
    } else {
      return res.status(404).send({ msg: `products not found` });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  fetchProductsList: fetchProductsList,
  fetchProductById: fetchProductById,
};
