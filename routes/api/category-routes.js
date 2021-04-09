const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  // find all categories
  const catData = await Category.findAll({
  // be sure to include its associated Products
    include: [{ model: Product }]
  });
  res.status(200).json(catData);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const cat = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
});
if (!cat) {
  res.status(404).json({ message: "No category found with that id!" });
  return;
}
res.status(200).json(cat);
} catch(err) {
  res.status(400).json(err);
}
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const newcat = await Category.create(req.body);  
    res.status(200).json(newcat)
  }
  catch (err) {
    console.log(err.message)
    res.status(500).end(err.message)
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
  const updatedCat = await Category.update(body, { where: { id } })
  res.json(updatedCat)
}
catch (err) {
  console.log(err.message)
  res.status(400).end(err.message)
}
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const catData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
