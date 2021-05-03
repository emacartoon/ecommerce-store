const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // find all tags
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find a single tag by its `id`
    const tag = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    if (!tag) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    console.log(err.message);
    res.status(500).end(err.message);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagInfo = await Tag.create(req.body);
    return res.json(tagInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagInfo = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.json(tagInfo);
  } catch (err) {
    res.json(err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    // delete on tag by its `id` value
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
