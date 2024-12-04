import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css';
import {BookSearch} from "./components/BookSearch/BookSearch"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<BookSearch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
