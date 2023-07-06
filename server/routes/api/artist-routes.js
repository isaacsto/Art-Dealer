const router = require("express").Router();
const {
  getArtists,
  getSingleArtist,
  createArtist,
  addArt,
  removeArt,
} = require("../../controllers/artistController");

router.route("/").get(getArtists).post(createArtist);
router.route("/:artistId").get(getSingleArtist);
router.route("/:artistId/art").put(addArt);
router.route("/:artistId/art/:artId").delete(removeArt);

module.exports = router;
