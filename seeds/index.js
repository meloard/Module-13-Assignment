
const seedCategories = require('./categorySeeds');
const seedProducts = require('./productSeeds');
const seedTags = require('./tagSeeds');
const seedProductTags = require('./productTagSeeds');

const sequelize = require('../config/connection');

const seedTest = async () => {
  await sequelize.sync({ force: true });
  console.log('\n-- DATABASE IS NOW SYNCED --\n');
  await seedCategories();
  console.log('\n-- CATEGORIES ARE NOW SEEDED --\n');

  await seedProducts();
  console.log('\n-- PRODUCTS ARE NOW SEEDED --\n');

  await seedTags();
  console.log('\n-- TAGS ARE NOW SEEDED --\n');

  await seedProductTags();
  console.log('\n-- PRODUCT-TAGS ARE NOW SEEDED --\n');

  process.exit(0);
};

seedTest();