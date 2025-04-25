import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListBooks from "pages/ListBooks";
import AddBook from "pages/AddBook";
import EditBook from "pages/EditBook";
import ViewBook from "pages/ViewBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBooks />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/view/:id" element={<ViewBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
