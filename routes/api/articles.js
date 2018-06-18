const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/savedArticles"
router.route("/api/savedArticles")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/savedArticles/:id"
router
  .route("/api/savedArticles/:id")
  .get(articlesController.findById)
  .delete(articlesController.remove);

module.exports = router;
