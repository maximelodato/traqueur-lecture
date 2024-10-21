import React, { useState, useEffect } from 'react';
import booksData from './books.json';
import BookList from './BookList';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import './style/main.scss'; // Chemin relatif pour le SCSS

// Fonction pour nettoyer les données du JSON
function cleanBooksData(rawData) {
  // Aplatir tous les niveaux de tableaux imbriqués
  const books = rawData.books.flat(Infinity);

  // Utiliser un Set pour suivre les ISBN uniques
  const isbnSet = new Set();

  return books.map((book, index) => {
    // Corriger le champ `publishedDate` si nécessaire
    if (book.publishedDate && book.publishedDate.$date) {
      book.publishedDate = book.publishedDate.$date;
    }

    // Vérifier si `isbn` est défini et unique
    if (!book.isbn || isbnSet.has(book.isbn)) {
      // Générer un identifiant unique si `isbn` est manquant ou dupliqué
      book.isbn = `book-${index}`;
    } else {
      isbnSet.add(book.isbn);
    }

    return book;
  });
}


function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [wished, setWished] = useState([]);
  const [filters, setFilters] = useState({
    favorites: false,
    wished: false,
  });

  // Initialiser les livres à partir du JSON et nettoyer les données
  useEffect(() => {
    const cleanedBooks = cleanBooksData(booksData);
    setBooks(cleanedBooks);
  }, []);

  // Charger les favoris et souhaits depuis le localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const savedWished = JSON.parse(localStorage.getItem('wished')) || [];
    setFavorites(savedFavorites);
    setWished(savedWished);
  }, []);

  // Sauvegarder les favoris dans le localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Sauvegarder les souhaits dans le localStorage
  useEffect(() => {
    localStorage.setItem('wished', JSON.stringify(wished));
  }, [wished]);

  return (
    <div className="container">
      <header>
        <h1>Traqueur de Lecture</h1>
      </header>
      <div className="search-bar">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      <div className="filter-buttons">
        <FilterButtons filters={filters} setFilters={setFilters} />
      </div>
      <BookList
        books={books}
        searchQuery={searchQuery}
        favorites={favorites}
        wished={wished}
        filters={filters}
        setFavorites={setFavorites}
        setWished={setWished}
      />
      <footer>
        <p>&copy; 2023 Votre Librairie</p>
      </footer>
    </div>
  );
}

export default App;
