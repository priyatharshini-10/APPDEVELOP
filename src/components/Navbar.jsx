// import React, { useState } from 'react';
// import Logo from '../images/logo.png';
// import { HiMenuAlt3 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';
// import Button from './Button';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../Authentication/AuthContext';

// const Navbar = () => {
//     const [open, setOpen] = useState(false);
//     const nav = useNavigate();
//     const { isLoggedIn, logout } = useAuth();

//     const handleLoginClick = () => {
//         nav("/login"); // Navigate to the login page
//     };

//     const handleLogoutClick = () => {
//         logout();
//         nav("/"); // Redirect to home page after logout
//     };

//     return (
//         <header className='w-full fixed z-10 bg-black opacity-90'>
//             <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
//                 <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
//                     <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
//                     Cook<span>Book</span>
//                 </a>

//                 <ul className='hidden md:flex text-white gap-6'>
//                     <li>
//                         <a href="/">Home</a>
//                     </li>
//                     <li>
//                         <a href="/#recipes">Explore</a>
//                     </li>
//                     <li>
//                         <a href="/favorites">Favorites</a>
//                     </li>
//                 </ul>

//                 {/* Conditionally render the Login or Logout button */}
//                 {!isLoggedIn ? (
//                     <Button
//                         title='Log in'
//                         conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
//                         handleClick={handleLoginClick}
//                     />
//                 ) : (
//                     <Button
//                         title='Log out'
//                         conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
//                         handleClick={handleLogoutClick}
//                     />
//                 )}

//                 <button className='block md:hidden text-white text-xl'
//                     onClick={() => setOpen(prev => !prev)}>
//                     {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
//                 </button>
//             </nav>
//             <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
//                 <a href="/">Home</a>
//                 <a href="/#recipes">Recipes</a>
//                 <a href="/favorites">Favorites</a>
//             </div>
//         </header>
//     );
// };

// export default Navbar;









import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';
import { useFavorites } from './FavoritesContext'; // Adjust path as necessary

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const { isLoggedIn, logout } = useAuth();
    const { favorites } = useFavorites(); // Get favorites from context

    const handleLoginClick = () => {
        nav("/login"); // Navigate to the login page
    };

    const handleLogoutClick = () => {
        logout();
        nav("/"); // Redirect to home page after logout
    };

    return (
        <header className='w-full fixed z-10 bg-black opacity-90'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
                    Cook<span>Book</span>
                </a>

                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#recipes">Explore</a>
                    </li>
                    <li>
                        <a href="/favorites">Favorites ({favorites.length})</a> {/* Show number of favorites */}
                    </li>
                </ul>

                {/* Conditionally render the Login or Logout button */}
                {!isLoggedIn ? (
                    <Button
                        title='Log in'
                        conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
                        handleClick={handleLoginClick}
                    />
                ) : (
                    <Button
                        title='Log out'
                        conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
                        handleClick={handleLogoutClick}
                    />
                )}

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="/favorites">Favorites ({favorites.length})</a> {/* Show number of favorites */}
            </div>
        </header>
    );
};

export default Navbar;

