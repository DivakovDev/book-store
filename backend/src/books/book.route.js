const express = require("express");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

// post - when submit something from forntend to db
// get - when get something back from db
// put/patch - when edit or update something
// delete - when delete something

// frontend => backend server => controller => book schema => database => send to server =>back to frontend

// post a book
router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// get single book
router.get("/:id", getSingleBook);

// update book
router.put("/edit/:id", verifyAdminToken, updateBook);

// delete book
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;
