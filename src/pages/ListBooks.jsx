import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "api/booksAPI";
import "styles/ListBooks.css";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
    } catch {
      // TODO: Colocar em popup
      alert("Erro ao excluir livro.");
    }
  };
  return (
    <div className="list-books-container">
      <div className="list-books-header">
        Consulta ao Acervo - Biblioteca Lucas P. Gasperin
      </div>
      <div className="list-books-body"></div>
    </div>
  );
};

export default ListBooks;
