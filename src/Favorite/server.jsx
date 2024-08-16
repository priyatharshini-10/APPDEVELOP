// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/recipeApp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const favoriteSchema = new mongoose.Schema({
//   userId: String,
//   recipeId: String,
// });

// const Favorite = mongoose.model('Favorite', favoriteSchema);

// // Route to add a recipe to favorites
// app.post('/favorites', async (req, res) => {
//   const { userId, recipeId } = req.body;

//   // Check if this recipe is already favorited by the user
//   const existingFavorite = await Favorite.findOne({ userId, recipeId });

//   if (existingFavorite) {
//     return res.status(400).json({ message: 'Recipe already in favorites!' });
//   }

//   const favorite = new Favorite({ userId, recipeId });
//   await favorite.save();

//   res.status(200).json({ message: 'Recipe added to favorites!' });
// });

// // Route to get all favorites for a user
// app.get('/favorites/:userId', async (req, res) => {
//   const { userId } = req.params;
//   const favorites = await Favorite.find({ userId });
//   res.status(200).json(favorites);
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });
