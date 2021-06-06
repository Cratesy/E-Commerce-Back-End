const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// get all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: {
        model: Product,
      },
    });
    res.json(tags);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to get all tags" });
  }
});

// get a single tag
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByPk(id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    res.json(tag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to get tag" });
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const tag = {
      tag_name: req.body,
    };
    await Tag.create(req.body);
    res.json(tag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to create tag" });
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    res.json(tag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to update tag" });
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.destroy({ where: { id } });
    res.json(tag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to delete tag" });
  }
});

module.exports = router;
