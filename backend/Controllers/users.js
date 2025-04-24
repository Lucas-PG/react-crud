import { db } from "../db.js";

export const getUsers = async (_, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return res.status(200).json(rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, age, cpf } = req.body;
    const [result] = await db.query(
      "INSERT INTO users (name, age, cpf) VALUES (?, ?, ?)",
      [name, age, cpf],
    );
    return res.status(200).json({ id: result.insertId, name, age, cpf });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const [name, age, cpf] = req.body;
    const [result] = await db.query(
      "UPDATE users SET name = ?, age = ?, cpf = ? WHERE id = ?",
      [name, age, cpf, req.params.id],
    );
    return res.status(200).json({ id: result.insertId, name, age, cpf });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [
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
