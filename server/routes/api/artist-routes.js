const router = require("express").Router();
const {
  getArtists,
  getSingleArtist,
  createArtist,
  addArt,
  removeArt,
} = require("../../controllers/artistController");

router.route("/").get(getArtists);
router.route("/").get(getSingleArtist);
router.route("/").post(createArtist);
router.route("/").get(addArt);
router.route("/").put(removeArt);

module.exports = router;
