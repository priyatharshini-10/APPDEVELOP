// import React, { createContext, useContext, useState } from 'react';

// const FavoritesContext = createContext();

// export const useFavorites = () => useContext(FavoritesContext);

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (recipe) => {
//     setFavorites((prevFavorites) => [...prevFavorites, recipe]);
//     console.log(favorites.length)
//   };

//   const removeFavorite = (recipeId) => {
//     setFavorites((prevFavorites) =>
//       prevFavorites.filter((recipe) => recipe.id !== recipeId)
//     );
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };









import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, recipe];
      console.log('Updated Favorites:', updatedFavorites);
      return updatedFavorites;
    });
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((recipe) => recipe.id !== recipeId);
      console.log('Updated Favorites:', updatedFavorites);
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
