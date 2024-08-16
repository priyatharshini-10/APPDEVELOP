// import React from 'react';
// import axios from 'axios';

// function FavoriteButton({ userId, recipeId }) {
//   const addToFavorites = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/favorites', {
//         userId,
//         recipeId,
//       });
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error adding to favorites', error);
//       if (error.response && error.response.data) {
//         alert(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <button onClick={addToFavorites} className="favorite-button">
//       Add to Favorites
//     </button>
//   );
// }

// export default FavoriteButton;
