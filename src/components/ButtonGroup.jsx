import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaStar, FaRegStar } from 'react-icons/fa';
import { useFavorites } from './FavoritesContext';

const ButtonGroup = ({ recipeId,recipe }) => {
    // Default values for like and dislike counts
    const { addFavorite, removeFavorite } = useFavorites();
    const [likes, setLikes] = useState(55);
    const [dislikes, setDislikes] = useState(13);

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const handleFavorite = () => {
        setFavorited(!favorited);
        if (favorited) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipe);
        }
    };


    const handleLike = async () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
        }
        setLiked(!liked);
        // Send the like status to the backend
        await fetch('/api/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipeId, liked: !liked })
        });
    };

    const handleDislike = async () => {
        if (disliked) {
            setDislikes(dislikes - 1);
        } else {
            setDislikes(dislikes + 1);
            if (liked) {
                setLikes(likes - 1);
                setLiked(false);
            }
        }
        setDisliked(!disliked);
        // Send the dislike status to the backend
        await fetch('/api/dislike', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipeId, disliked: !disliked })
        });
    };

    // const handleFavorite = async () => {
    //     setFavorited(!favorited);
    //     // Send the favorite status to the backend
    //     await fetch('/api/favorite', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ recipeId, favorited: !favorited })
    //     });
    // };

    return (
        <div className="flex gap-4 mt-4">
            <button
                onClick={handleLike}
                className={`p-4 border rounded-lg hover:bg-blue-500 transition-colors duration-300 ${liked ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    } flex items-center gap-2`}
            >
                <FaRegThumbsUp size={24} />
                <span>{likes}</span> {/* Display like count */}
            </button>

            <button
                onClick={handleDislike}
                className={`p-4 border rounded-lg hover:bg-blue-500 transition-colors duration-300 ${disliked ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    } flex items-center gap-2`}
            >
                <FaRegThumbsDown size={24} />
                <span>{dislikes}</span> {/* Display dislike count */}
            </button>

            <button
                onClick={handleFavorite}
                className={`p-4 border rounded-lg hover:bg-blue-500 transition-colors duration-300 ${favorited ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    }`}
            >
                {favorited ? <FaStar size={24} /> : <FaRegStar size={24} />}
            </button>
        </div>
    );
};

export default ButtonGroup;
