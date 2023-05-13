import React from 'react';
import {useNavigate} from "react-router-dom";
import {ADD_TO_BASKET} from "../../store/ActionTypes";
import {useDispatch} from "react-redux";
const AddToBasketBtn = ({el}) => {
    const dispatch = useDispatch()
    const addToBasket = () => {
        dispatch({type: ADD_TO_BASKET, payload: el})
    }
    return (
        <button
            onClick={addToBasket}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >Добавить в корзину
        </button>

    );
};

export default AddToBasketBtn;