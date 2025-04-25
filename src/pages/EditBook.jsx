import { useEffect, useState } from "react";
import "styles/EditBook.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getBookById, updateBook } from "api/booksAPI";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    year_published: "",
    language: "",
    pages: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setForm(data);
      } catch (err) {
        alert("Erro ao carregar livro para edição.");
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, form);
      navigate("/");
    } catch (err) {
      alert("Erro ao salvar alterações.");
      console.log(err.message);
    }
  };

  return (
    <div className="edit-body">
      <div className="edit-book-container">
        <div className="edit-book-header">
          <h2>Editar Livro</h2>
        </div>
        <form onSubmit={handleSubmit} className="edit-book-form">
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder={form.title}
            />
          </label>
          <label>
            Autor:
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              placeholder={form.author}
            />
          </label>
          <label>
            Ano de Publicação:
            <input
              type="number"
              name="year_published"
              value={form.year_published}
              onChange={handleChange}
              placeholder={form.year_published}
            />
          </label>
          <label>
            Língua:
            <input
              type="text"
              name="language"
              value={form.language}
              onChange={handleChange}
              placeholder={form.language}
            />
          </label>
          <label>
            Número de Páginas:
            <input
              type="number"
              name="pages"
              value={form.pages}
              onChange={handleChange}
              placeholder={form.pages}
            />
          </label>
          <div className="edit-buttons">
            <Link to="/" className="back-button">
              Voltar
            </Link>
            <button type="submit" className="save-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
