import { useEffect, useState } from "react";
import "styles/EditBook.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getBookById, updateBook } from "api/booksAPI";
import { useToast } from "hooks/useToast";

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
  const [Toast, showToast] = useToast();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setForm(data);
      } catch (err) {
        showToast("Erro ao carregar livro para edição");
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.author ||
      !form.year_published ||
      !form.language ||
      !form.pages
    ) {
      showToast("Todos os campos são obrigatórios.");
      return;
    }

    if (form.pages <= 0) {
      showToast("O número de páginas deve ser positivo.");
      return;
    }

    try {
      await updateBook(id, form);
      navigate("/");
    } catch (err) {
      showToast("Erro ao salvar alterações.");
    }
  };

  return (
    <>
      <Toast />
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
              />
            </label>
            <label>
              Autor:
              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
              />
            </label>
            <label>
              Ano de Publicação:
              <input
                type="number"
                name="year_published"
                value={form.year_published}
                onChange={handleChange}
              />
            </label>
            <label>
              Língua:
              <input
                type="text"
                name="language"
                value={form.language}
                onChange={handleChange}
              />
            </label>
            <label>
              Número de Páginas:
              <input
                type="number"
                name="pages"
                value={form.pages}
                onChange={handleChange}
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
    </>
  );
};

export default EditBook;
