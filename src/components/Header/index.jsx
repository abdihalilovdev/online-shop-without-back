import React from 'react';
import logo from '../../img/logo.svg'
import {NavLink,Link} from "react-router-dom";

const Header = () => {
    return (
       <div className='bg-emerald-400 fixed left-0 top-0 right-0'>
           <div className='w-full py-4 px-6 container'>
               <div className='flex bg-emerald-400 py-4 px-4 justify-between items-center'>
                   <div>
                       <Link to={'/'}>
                           <img className='header-logo' width={50} src={logo} alt="img"/>
                       </Link>
                   </div>
                   <nav className='header-nav'>
                       <NavLink to={'/'} className='text-amber-500 font-bold text-xl hover:text-amber-400 mx-4'>Products</NavLink>
                       <NavLink to={'/favorites'} className='text-amber-500 font-bold text-xl hover:text-amber-400 mx-4'>Favorites</NavLink>
                       <NavLink to={'/basket'} className='text-amber-500 font-bold text-xl hover:text-amber-400 mx-4'>Basket</NavLink>
                   </nav>
                   <select
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 font-bold">
                       <option selected>Choose a country</option>
                       <option value="US">United States</option>
                       <option value="CA">Canada</option>
                       <option value="FR">France</option>
                       <option value="DE">Germany</option>
                   </select>
               </div>
           </div>
       </div>
    );
};

export default Header;