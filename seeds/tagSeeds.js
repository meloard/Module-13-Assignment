const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Samsung',
  },
  {
    tag_name: 'Apple',
  },
  {
    tag_name: 'Lexus',
  },
  {
    tag_name: 'Nintendo',
  },
  {
    tag_name: 'Organic',
  },
  {
    tag_name: 'Non-GMO',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;