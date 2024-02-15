const express = require("express");
const router = express.Router();
router.post("/getfooddata", (req, res) => {
  try {
    console.log(global.food_data);
    res.send([global.food_data, global.food_catData]);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
