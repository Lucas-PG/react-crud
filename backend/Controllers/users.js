import { db } from "../db.js";

export const getBooks = async (_, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM books");
    return res.status(200).json(rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, year_published, language, pages } = req.body;
    const [result] = await db.query(
      "INSERT INTO books (title, author, year_published, language, pages) VALUES (?, ?, ?, ?, ?)",
      [title, author, year_published, language, pages],
    );
    return res.status(200).json({
      id: result.insertId,
      title,
      author,
      year_published,
      language,
      pages,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { title, author, year_published, language, pages } = req.body;
    const [result] = await db.query(
      "UPDATE books SET title = ?, author = ?, year_published = ?, language = ?, pages = ? WHERE id = ?",
      [title, author, year_published, language, pages, req.params.id],
    );
    return res.status(200).json({
      id: result.insertId,
      title,
      author,
      year_published,
      language,
      pages,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM books WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    return res.status(200).json(rows[0]);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
