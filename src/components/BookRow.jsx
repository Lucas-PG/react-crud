import React from "react";
import { Link } from "react-router-dom";
import "styles/BookRow.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export const BookRow = ({ book, onEdit, onDelete }) => {
  return (
    <div className="book-row">
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.year_published}</div>
      <div>{book.language}</div>
      <div>{book.pages}</div>
      <div className="action-buttons">
        <Link to={`/books/${book.id}`} className="icon-btn" title="Visualizar">
          <FaEye />
        </Link>
        <button
          onClick={() => onEdit(book.id)}
          className="icon-btn"
          title="Editar"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="icon-btn"
          title="Excluir"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
