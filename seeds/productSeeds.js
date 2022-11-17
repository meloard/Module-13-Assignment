

const { Product } = require('../models');

const productData = [
  {
    product_name: 'Designer Jeans',
    price: 69.99,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: 'Track Suit',
    price: 79.50,
    stock: 40,
    category_id: 2,
  },
  {
    product_name: 'Floral Summer Dress',
    price: 40.00,
    stock: 69,
    category_id: 3,
  },
  {
    product_name: 'Wool Socks',
    price: 17.98,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Microfiber Bath Robe',
    price: 37.20,
    stock: 86,
    category_id: 5,
  },
  {
    product_name: 'Bikini Suit',
    price: 56.99,
    stock: 2,
    category_id: 6,
  },
  {
    product_name: 'Down-Feathered Parka',
    price: 375.86,
    stock: 161,
    category_id: 7,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;