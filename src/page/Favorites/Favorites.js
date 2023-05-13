import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsArrowLeft} from "react-icons/bs";
import FavoriteList from "./FavoriteList";

const Favorites = () => {
    const {favorites} = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className='container'>
              <h1 className='text-center font-mono text-3xl my-2'>Basket</h1>
              <ul className='pt-36 mx-auto w-[600px]'>
                  {
                      favorites.map(el => (
                          <FavoriteList el={el}/>
                      ))
                  }
              </ul>
        </div>
    );
};

export default Favorites;