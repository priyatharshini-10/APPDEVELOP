import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './Authentication/AuthContext';
// import { FavoritesProvider } from './components/FavoritesContext';
import FavoritesPage from './components/FavoritesPage';
import { FavoritesProvider } from './components/FavoritesContext';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    // <AuthProvider>
    //   <FavoritesProvider>
    //     <div className='bg-black'>
    //       <Routes>
    //         {/* Set Home as the initial path */}
    //         <Route path='/' element={<Layout />}>
    //           <Route index element={<Home />} />
    //           <Route path='recipes/:id' element={<RecipeDetail />} />
    //           <Route path='/favorites' element={<FavoritesPage />} />
    //         </Route>
    //         {/* Separate paths for Login and Signup */}
    //         <Route path='/login' element={<Login />} />
    //         <Route path='/signup' element={<Signup />} />
    //       </Routes>
    //     </div>
    //   </FavoritesProvider>
    // </AuthProvider>
    <AuthProvider>
      <FavoritesProvider>
        <div className='bg-black'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='recipes/:id' element={<RecipeDetail />} />
              <Route path='/favorites' element={<FavoritesPage />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
