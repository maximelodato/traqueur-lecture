import React from 'react';
import BookCard from './BookCard';

function BookList({
  books,
  searchQuery,
  favorites,
  wished,
  filters,
  setFavorites,
  setWished,
}) {
  const filterBooks = () => {
    let filteredBooks = books;

    if (searchQuery) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.favorites && filters.wished) {
      // Afficher les livres qui sont dans les favoris OU dans les souhaits
      filteredBooks = filteredBooks.filter(
        (book) => favorites.includes(book.isbn) || wished.includes(book.isbn)
      );
    } else if (filters.favorites) {
      filteredBooks = filteredBooks.filter((book) =>
        favorites.includes(book.isbn)
      );
    } else if (filters.wished) {
      filteredBooks = filteredBooks.filter((book) =>
        wished.includes(book.isbn)
      );
    }

    return filteredBooks;
  };

  const displayedBooks = filterBooks();

  return (
    <div className="book-list">
      {displayedBooks.length > 0 ? (
        displayedBooks.map((book) => (
          <BookCard
            key={book.isbn}
            book={book}
            favorites={favorites}
            wished={wished}
            setFavorites={setFavorites}
            setWished={setWished}
          />
        ))
      ) : (
        <p>Aucun livre ne correspond à vos critères</p>
      )}
    </div>
  );
}

export default BookList;
