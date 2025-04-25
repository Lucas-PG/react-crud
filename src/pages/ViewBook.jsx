import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "api/booksAPI";
import "styles/ViewBook.css";

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        console.log("Erro ao carregar dados do livro");
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Carregando...</div>;

  return (
    <div className="view-book-body">
      <div className="view-book-container">
        <h2 className="view-title">Detalhes do Livro</h2>
        <div className="book-info-box">
          <div className="info-row">
            <span className="label">Título:</span>
            <span className="value">{book.title}</span>
          </div>
          <div className="info-row">
            <span className="label">Autor:</span>
            <span className="value">{book.author}</span>
          </div>
          <div className="info-row">
            <span className="label">Ano de Publicação:</span>
            <span className="value">{book.year_published}</span>
          </div>
          <div className="info-row">
            <span className="label">Idioma:</span>
            <span className="value">{book.language}</span>
          </div>
          <div className="info-row">
            <span className="label">Páginas:</span>
            <span className="value">{book.pages}</span>
          </div>
        </div>

        <Link to="/" className="back-button">
          ← Voltar
        </Link>
      </div>
    </div>
  );
};

export default ViewBook;
