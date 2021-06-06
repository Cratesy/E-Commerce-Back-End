const router = require("express").Router();
const { Category, Product } = require("../../models");
const { sync } = require("../../models/Product");

// get all categorys
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
});

// get category by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id, {
      include: {
        model: Product,
      },
    });
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to get category" });
  }
});

// create new category
router.post("/", async (req, res) => {
  try {
    const category = {
      category_name: req.body,
    };
    await Category.create(req.body);
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to create category" });
  }
});

// update a category by its `id` value
router.put("/:id", (req, res) => {});

// delete a category by its `id` value
router.delete("/:id", (req, res) => {});

module.exports = router;
