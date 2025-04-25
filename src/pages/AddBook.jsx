import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addBook } from "api/booksAPI";
import "styles/AddBook.css";
import { useToast } from "hooks/useToast";

const AddBook = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    year_published: "",
    language: "",
    pages: "",
  });
  const [Toast, showToast] = useToast();

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
      await addBook(form);
      navigate("/");
    } catch (err) {
      showToast("Erro ao cadastrar livro. Verifique os dados.");
      console.log(err);
    }
  };

  return (
    <>
      <Toast />
      <div className="add-body">
        <div className="add-book-container">
          <div className="add-book-header">
            <h2>Cadastrar Livro</h2>
          </div>
          <form onSubmit={handleSubmit} className="add-book-form">
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
            <div className="add-buttons">
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

export default AddBook;
