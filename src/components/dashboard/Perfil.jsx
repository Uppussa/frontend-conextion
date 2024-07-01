import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    return (

        <header className="flex justify-between items-center p-4 bg-white">
            <div className="relative">
                <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-300">
          <span class="[&>svg]:w-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>
          </span>
        </button>
                    <span>   
                        {user?.name || 'User'}
                    </span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Group Chat</a>
                        <button
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                )}
            </div>
        </header>
     
    );
};

export default Perfil;
