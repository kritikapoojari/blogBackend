const express = require("express");
const { getAllBlogs, getBlogsById } = require("../controllers/taskController");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/:id").get(getBlogsById);

module.exports = router;