const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async function (req, res) {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({include: Product})
    res.json(categories)
  }
  catch {
    console.error(err)
  }
});

router.get('/:id', async function (req, res) {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findOne({where: { id: req.params.id }, include: Product})
  res.json(category)
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create(req.body)
  res.json(category)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category = await Category.update(req.body, {where: {id: req.params.id}})
  res.json(category)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({where: {id: req.params.id}})
  res.json(200)
});

module.exports = router;
