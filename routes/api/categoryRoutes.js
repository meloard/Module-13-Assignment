const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
    if(!categoryData) {
      res.status(404).json({message: "There is no data for categories"})
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryDataId = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryDataId) {
      res.status(404).json({ message: 'Category not found with that id'});
      return;
    }

    res.status(200).json(categoryDataId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body);

  return res.json(newCategory);
});

router.put('/:category_id', async (req, res) => {
  try {
    const categoryUpdate = await Category.update({
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    },
  });
  if (!categoryUpdate) {
    res.status(404).json({ message: "Category not found with that id"});
    return;
  }
  res.status(200).json(categoryUpdate);
   } catch (err) {
    res.status(500).json(err);
   }
  });

router.delete('/:id', async (req, res) => {
  try {
  const deleteCategory = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!deleteCategory) {
    res.status(404).json({ message: "Category not found with that id"});
    return;
  }
  res.status(200).json(deleteCategory);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;