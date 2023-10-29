const router = require("express").Router();

const userController = require("./controllers/userController");
const furnitureController = require("./controllers/furnitureController");

router.use('/users', userController);
router.use('/data/furnitures', furnitureController); // as per the requirement (we replaced catalog with furnitures in order to keep the convention)



module.exports = router;
