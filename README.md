Traqueur de Lecture
Bienvenue dans Traqueur de Lecture, une application web qui vous permet de gérer efficacement votre liste de livres. Recherchez des livres, ajoutez-les à vos favoris, indiquez ceux que vous souhaitez lire, et filtrez votre collection selon vos préférences.

Fonctionnalités
Recherche de livres : Trouvez vos livres préférés en recherchant par titre.
Gestion des favoris : Ajoutez des livres à votre liste de favoris pour un accès rapide.
Liste de souhaits : Marquez les livres que vous souhaitez lire plus tard.
Filtres avancés : Filtrez les livres par favoris, souhaits, ou les deux simultanément.
Indicateurs visuels : Identifiez rapidement les livres favoris et ceux que vous souhaitez lire grâce à des badges.
Interface réactive : Profitez d'une expérience utilisateur fluide sur tous les appareils grâce à un design responsive.
Persistance des données : Vos favoris et souhaits sont sauvegardés localement pour une récupération ultérieure.
Aperçu

Prérequis
Assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 12 ou supérieure)
npm ou Yarn
Installation
Cloner le dépôt

bash
Copier le code
git clone https://github.com/votre-utilisateur/votre-depot.git
cd votre-depot
Installer les dépendances

Avec npm :

bash
Copier le code
npm install
Ou avec Yarn :

bash
Copier le code
yarn install
Lancer l'application

Avec npm :

bash
Copier le code
npm start
Ou avec Yarn :

bash
Copier le code
yarn start
Accéder à l'application

Ouvrez votre navigateur et allez sur http://localhost:3000

Utilisation
Rechercher un livre

Utilisez la barre de recherche en haut pour trouver un livre par son titre.

Ajouter un livre aux favoris

Cliquez sur le bouton "Ajouter aux favoris" sur la carte du livre pour l'ajouter à vos favoris. Le bouton deviendra "Retirer des favoris" une fois le livre ajouté.

Indiquer un livre à lire

Cliquez sur le bouton "Ajouter aux souhaits" pour marquer un livre que vous souhaitez lire plus tard. Le bouton deviendra "Retirer des souhaits" une fois le livre ajouté.

Filtrer les livres

Utilisez les boutons de filtre pour afficher uniquement vos favoris, vos souhaits, ou les deux :

Filtrer selon mes favoris
Filtrer selon mes souhaits
Visualiser les statuts des livres

Chaque livre affiche des badges pour indiquer s'il est dans vos favoris, vos souhaits, ou les deux.

Structure du Projet
App.js : Composant principal qui gère l'état global de l'application.
BookList.js : Composant qui affiche la liste des livres en fonction des filtres et de la recherche.
BookCard.js : Composant qui représente chaque livre individuellement.
SearchBar.js : Composant pour la barre de recherche.
FilterButtons.js : Composant pour les boutons de filtre.
books.json : Fichier contenant les données des livres.
main.scss : Fichier de style principal pour la mise en page et le design.
Technologies Utilisées
React : Bibliothèque JavaScript pour construire l'interface utilisateur.
SCSS : Préprocesseur CSS pour des styles plus puissants et modulaires.
LocalStorage : Pour la persistance locale des données (favoris et souhaits).
Flexbox & Grid : Pour une mise en page responsive et flexible.
Personnalisation
Modifier les données des livres

Vous pouvez éditer le fichier books.json pour ajouter, supprimer ou modifier les livres de la collection.

Changer le thème ou les styles

Personnalisez le fichier main.scss pour adapter les couleurs, les polices et le design général selon vos préférences.
