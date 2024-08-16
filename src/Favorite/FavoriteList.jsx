// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function FavoritesList({ userId }) {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/favorites/${userId}`);
//         setFavorites(response.data);
//       } catch (error) {
//         console.error('Error fetching favorites', error);
//       }
//     };

//     fetchFavorites();
//   }, [userId]);

//   return (
//     <div>
//       <h2>Your Favorites</h2>
//       <ul>
//         {favorites.map(fav => (
//           <li key={fav.recipeId}>{fav.recipeId}</li> // Replace with actual recipe details
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FavoritesList;
