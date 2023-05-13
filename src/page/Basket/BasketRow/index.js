import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsFillTrash3Fill} from "react-icons/bs";
import {ADD_TO_BASKET, DECREASE_QUANTITY, DELETE_FROM_BASKET} from "../../../store/ActionTypes";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import ModalImage from "./ModalImage";

const BasketRow = ({el}) => {
    const dispatch = useDispatch()
    const deleteFromBasket = () => {
        dispatch({type:DELETE_FROM_BASKET,payload:el.id})
    }
    const decreaseQuantity = () => {
        dispatch({type:DECREASE_QUANTITY,payload:el.id})
    }
    const addToBasket = () => {
        dispatch({type: ADD_TO_BASKET, payload: el})
    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <ModalImage el={el}/>
            </td>

            <td className="px-6 py-4 flex items-center">
                <AiOutlineMinusCircle onClick={decreaseQuantity} className={`text-[21px] ${el.quantity !== 1 && 'text-blue-700'}`}/>
                <h1 className='text-[22px] mx-2'>{el.quantity}</h1>
                <AiOutlinePlusCircle onClick={addToBasket} className='text-[21px] text-blue-700'/>
            </td>
            <td className="px-6 py-4">
                <h1 className='text-[18px]'>{el.price * el.quantity}</h1>
            </td>
            <td className="px-6 py-4">
                <BsFillTrash3Fill onClick={deleteFromBasket} className='cursor-pointer text-red-700 text-[20px]'/>
            </td>

        </tr>
    );
};

export default BasketRow;