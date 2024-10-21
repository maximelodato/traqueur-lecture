import React from 'react';

function BookCard({ book, favorites, wished, setFavorites, setWished }) {
  // Vérifier que book.isbn est défini
  if (!book.isbn) {
    console.error(`Le livre "${book.title}" n'a pas d'identifiant unique (isbn).`);
    return null; // Ne pas rendre le composant si l'ISBN est manquant
  }

  const isFavorite = favorites.includes(book.isbn);
  const isWished = wished.includes(book.isbn);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== book.isbn));
    } else {
      setFavorites([...favorites, book.isbn]);
    }
  };

  const toggleWished = () => {
    if (isWished) {
      setWished(wished.filter((id) => id !== book.isbn));
    } else {
      setWished([...wished, book.isbn]);
    }
  };

  return (
    <div className="book-card">
      <img src={book.thumbnailUrl} alt={`Couverture de ${book.title}`} />
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>{book.shortDescription || book.longDescription}</p>
      </div>
      <div className="book-actions">
        <button onClick={toggleFavorite} className="favorite">
          {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>
        <button onClick={toggleWished}>
          {isWished ? 'Retirer des souhaits' : 'Ajouter aux souhaits'}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
