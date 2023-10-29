const router = require("express").Router();
const furnitureService = require("../services/furnitureService");

router.get("/", async (req, res) => {
  try {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { description, img, make, material, model, price, year } = req.body;
    await furnitureService.create({
      description,
      img,
      make,
      material,
      model,
      price,
      year,
      _ownerId: req.user._id, // owner info is within the req.user, hence we add it as a property
    });
    res.status(201).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.get("/:furnitureId", async (req, res) => {
  try {
    const { furnitureId } = req.params;
    const furniture = await furnitureService.getOne(furnitureId);
    res.json(furniture); // we send this to the client
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});



module.exports = router;
