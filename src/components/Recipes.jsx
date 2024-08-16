import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'
import Button from './Button'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('cake')
    const [limit, setLimit] = useState(30)
    const [loading, setLaoding] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit })

            setRecipes(data)

            setLaoding(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLaoding(false)
        }
    }

    const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        fetchRecipe()
    }

    const showMore = () => {
        setLimit(prev => prev + 10)
        fetchRecipe()
    }

    useEffect(() => {
        setLaoding(true)

        fetchRecipe()

    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <Searchbar placeholder="Search...Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>

            </div>

            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>

                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div>
                    </>
                ) : <div className='text-white w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            }
        </div>
    )
}

export default Recipes







// import React from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// var id = "";
// const Recipe = () => {
//     const [item, setItem] = useState();
//     const { recipeId } = useParams();
//     if (recipeId !== " ") {
//         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
//             setItem(data.meals[0]);
//         })
//     }
//     if (item) {
//         const strYoutube = item.strYoutube;
//         const str = strYoutube.split("=");
//         id = str[str.length - 1];
//     }


//     return (
//         <>
//             {
//                 (!item) ? "" :
//                     <div className="content">
//                         <img src={item.strMealThumb} alt="" />
//                         <div className="inner-content">
//                             <h1>{item.strMeal}</h1>
//                             <h2>{item.strArea} Food</h2>
//                             <h3>Category {item.strCategory}</h3>
//                         </div>

//                         <div className="recipe-details">
//                             <div className="ingredients">
//                                 <h2>Ingredients</h2><br />
//                                 <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
//                                 <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
//                                 <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
//                                 <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
//                                 <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
//                                 <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
//                                 <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
//                                 <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
//                             </div>
//                             <div className="instructions">
//                                 <h2>Instructions</h2><br />
//                                 <h4>{item.strInstructions}</h4>
//                             </div>
//                         </div>
//                         <div className="video">

//                             <iframe height="515" width="100%" 
//                             src={`https://www.youtube.com/embed/${id}`}>
//                             </iframe>
//                         </div>
//                     </div>
//             }

//         </>

//     )
// }
// export default Recipe