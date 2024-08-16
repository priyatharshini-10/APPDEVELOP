// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Signup = () => {
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const navigate = useNavigate();

// //     const handleRegister = async (e) => {
// //         e.preventDefault();

// //         // Prepare the data to be sent to the backend
// //         const userData = {
// //             name: name,
// //             email: email,
// //             password: password
// //         };

// //         try {
// //             const response = await fetch('http://localhost:8080/signup', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(userData)
// //             });

// //             if (response.ok) {
// //                 const result = await response.json();
// //                 console.log('User registered:', result);
// //                 alert('Registration successful! Redirecting to login page...');
// //                 navigate('/');
// //             } else {
// //                 const errorMessage = await response.text();
// //                 alert(`Registration failed: ${errorMessage}`);
// //             }
// //         } catch (error) {
// //             console.error('Error during registration:', error);
// //             alert('An error occurred during registration. Please try again later.');
// //         }
// //     };

// //     return (
// //         // <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-healthy-thai-food-recipes-concept-image_15645273.jpg')]">
// //         <div className="flex justify-center items-center h-screen bg-gray-900">
// //             <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg w-96">
// //                 <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
// //                     <input
// //                         type="text"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                         placeholder="Enter your name"
// //                         required
// //                     />
// //                 </div>

// //                 <div className="mb-4">
// //                     <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
// //                     <input
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                         placeholder="Enter your email"
// //                         required
// //                     />
// //                 </div>

// //                 <div className="mb-6">
// //                     <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
// //                     <input
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                         placeholder="Enter your password"
// //                         required
// //                     />
// //                 </div>

// //                 <div className="flex items-center justify-between">
// //                     <button
// //                         type="submit"
// //                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                     >
// //                         Create Account
// //                     </button>
// //                 </div>

// //                 <p className="mt-4 text-center text-gray-600">
// //                     Already registered?{' '}
// //                     <button
// //                         type="button"
// //                         className="text-blue-500 hover:underline"
// //                         onClick={() => navigate('/')}
// //                     >
// //                         Log in
// //                     </button>
// //                 </p>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Signup;







import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User registered:', result);
                alert('Registration successful! Redirecting to login page...');
                navigate('/');
            } else {
                const errorMessage = await response.text();
                alert(`Registration failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://www.shutterstock.com/image-photo/uncooked-pasta-vegetables-cooking-background-top-1877101084')` }}>
            <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Account
                    </button>
                </div>

                <p className="mt-4 text-center text-gray-600">
                    Already registered?{' '}
                    <button
                        type="button"
                        className="text-blue-500 hover:underline"
                        onClick={() => navigate('/')}
                    >
                        Log in
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Signup;

