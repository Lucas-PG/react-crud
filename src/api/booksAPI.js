import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800",
});

export const getBooks = async () => {
  const response = await api.get("/");
  return response.data;
};

export const addBook = async (book) => {
  const response = await api.post("/", book);
  return response.data;
};

export const updateBook = async (id, book) => {
  const response = await api.put(`/${id}`, book);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

export const getBookById = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};
