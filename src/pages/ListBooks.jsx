import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "api/booksAPI";
import { BookRow } from "components/BookRow";
import "styles/ListBooks.css";
import { useToast } from "hooks/useToast";

const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [Toast, showToast] = useToast();

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
      setBooks(books.filter((book) => book.id !== id));
    } catch {
      showToast("Erro ao deletar o livro.");
    }
  };
  return (
    <div className="list-body">
      <div className="gif-div">
        <img
          src="/spirited-away.gif"
          alt="Spirited Away"
          className="ghibli-banner"
          height={150}
        />
      </div>
      <div className="list-books-container">
        <div className="list-books-header">
          <header>Consulta ao Acervo</header>
          <header>Biblioteca Lucas P. Gasperin</header>
        </div>
        {books.length === 0 && <p>Nenhum livro encontrado.</p>}
        {books.length > 0 && (
          <div className="list-books-body">
            <div className="list-books-body-header">
              <div>
                <header>Título</header>
              </div>
              <div>
                <header>Autor</header>
              </div>
              <div>
                <header>Ano de Publicação</header>
              </div>
              <div>
                <header>Língua</header>
              </div>
              <div>
                <header>Número de Páginas</header>
              </div>
              <div>
                <header>Ações</header>
              </div>
            </div>

            <div className="list-books-dividing"></div>
            <div className="list-books-body-rows">
              {books.map((book) => (
                <BookRow
                  key={book.id}
                  book={book}
                  onEdit={() => (window.location.href = `/edit/${book.id}`)}
                  onDelete={() => handleDelete(book.id)}
                />
              ))}
            </div>
          </div>
        )}
        <div className="add-book-div">
          <Link to="/add" className="add-book-btn">
            Cadastrar Livro
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
