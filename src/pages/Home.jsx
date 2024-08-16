import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'
import RecipeCard from '../components/RecipeCard'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <p>
            Taste the World with
            <br /> COOKBOOK!
          </p>
        }
        type='home'
      />

      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
      {/* <RecipeCard/> */}
    </main>
  )
}

export default Home