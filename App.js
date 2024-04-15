import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Nav from "./Nav"; 

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter")
      .then((res) => {
        setBooks(res.data.items);
        setFilteredBooks(res.data.items); // Initially set filteredBooks to all books
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  useEffect(() => {
    // Filter books based on search query
    const filteredResults = books.filter(book => {
      const title = book.volumeInfo.title.toLowerCase();
      return title.includes(search.toLowerCase());
    });
    setFilteredBooks(filteredResults);
  }, [books, search]);

  return (
    <div className="App">
      <Router>
        <Nav search={search} setsearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home books={filteredBooks} />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
