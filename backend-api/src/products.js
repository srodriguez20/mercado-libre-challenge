const axios = require('axios');
const API_URL = 'https://api.mercadolibre.com';
const SEARCH_ENDPOINT = '/sites/MLA/search';
const ITEMS_ENDPOINT = '/items/';
const ITEMS_DESC_ENDPOINT = '/decription';
const SEARCH_API_URL = `${API_URL}${SEARCH_ENDPOINT}`;
const limit = 4;

const categoryListBuilder = (filters) => {
  const categoriesObject = filters.find((filter) => filter.id === 'category');
  console.log(
    '🚀 ~ file: products.js ~ line 15 ~ categoryListBuilder ~ categoriesObject',
    categoriesObject
  );
  const categories =
    categoriesObject &&
    categoriesObject.values &&
    categoriesObject.values.length > 0
      ? categoriesObject.values[0].path_from_root.map(
          (category) => category.name
        )
      : [];
  return categories;
};

const itemMapper = (item) => {
  const { prices } = item;
  const [firstPrice] = prices.prices;
  const { currency_id, amount } = firstPrice;
  const price = firstPrice
    ? { currency: currency_id, amount: amount, decimals: 0 }
    : {};
  return {
    id: item.id,
    title: item.title,
    price: price,
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    state_name: item.address?.state_name,
  };
};

const fetchProductsList = async (req, res) => {
  try {
    const query = req.query.q;
    const request = await axios.get(
      `${SEARCH_API_URL}?q=${query}&limit=${limit}`
    );

    const { data } = request;
    if (data) {
      const catergoriesList = categoryListBuilder(data.filters);
      const result = {
        author: { name: '', lastname: '' },
        categories: catergoriesList,
        items: data.results.map(itemMapper),
      };
      return res.status(200).send(result);
    } else {
      return res.status(404).send({ msg: `products not found` });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const fetchProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await axios.get(
      `${SEARCH_API_URL}?q=${query}&limit=${limit}`
    );
    const result = {
      author: {
        name: '',
        lastname: '',
      },
      item: {
        id: '',
        title: '',
        price: {
          currency: '',
          amount: '',
          decimals: 0,
        },
        picture: '',
        condition: '',
        free_shipping: false,
        sold_quantity: 0,
        description: '',
      },
    };

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
