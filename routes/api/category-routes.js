const router = require("express").Router();
const { Category, Product } = require("../../models");
const { sync } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categorys = await Category.findAll({
      include: {
        model: Product,
        attributes: ["product_name"],
      },
    });
    res.json(categorys);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to get all categorys" });
  }

  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id, {
      include: {
        model: Product,
        attributes: ["category_id"],
      },
    });
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to get category" });
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
