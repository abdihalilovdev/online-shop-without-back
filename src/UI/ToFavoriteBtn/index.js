import React from 'react';
import {BsFillHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_FAVORITES} from "../../store/ActionTypes";

const ToFavoriteBtn = ({el}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(state => state)
    const addToFavorite = (product) => {
        dispatch({type:ADD_TO_FAVORITES,payload:product})
    }
    const found = favorites.some(f => f.id === el.id)
    return (
        <button
            onClick={() => addToFavorite(el)}
            className={`${found ? 'text-red-700' : 'text-white'} bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
        ><BsFillHeartFill className='text-[18px]'/>
        </button>
    );
};

export default ToFavoriteBtn;