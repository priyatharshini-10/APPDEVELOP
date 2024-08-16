// import React from 'react';
// import { useFavorites } from './FavoritesContext'; 
// import RecipeCard from './RecipeCard'; 

// const FavoritesPage = () => {
//   const { favorites } = useFavorites();
//   console.log(favorites);
//   if (favorites.length === 0) {
//     return <p className='text-white text-center'>No favorite recipes yet.</p>;
//   }

//   return (
//       <div className='w-full px-4 lg:px-20 pt-5'>
//         {console.log("hii")}
//       <h2 className='text-white text-2xl mb-4'>Your Favorites</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {favorites.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


import React from 'react';
import { useFavorites } from './FavoritesContext'; 
import RecipeCard from './RecipeCard'; 

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p className='text-white text-center'>No favorite recipes yet.</p>;
  }

  return (
    <div className='w-full px-4 lg:px-20 pt-5'>
      <h2 className='text-white text-2xl mb-4'>Your Favorites</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
