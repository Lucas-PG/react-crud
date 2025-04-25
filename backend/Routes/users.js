import express from "express";
import {
  getBooks,
  addBook,
  deleteBook,
  updateBook,
  getBookById,
} from "../Controllers/users.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/:id", getBookById);

export default router;
