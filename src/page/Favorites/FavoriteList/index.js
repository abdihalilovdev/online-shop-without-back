import React, {useState} from 'react';
import {BsArrowLeft, BsTrashFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_FAVORITES} from "../../../store/ActionTypes";

const FavoriteList = ({el}) => {
    const dispatch = useDispatch()
    const addToFavorite = (product) => {
        dispatch({type:ADD_TO_FAVORITES,payload:product})
        setIsScrolled(false)
    }
    const [isScrolled, setIsScrolled] = useState(false)
    return (
        <li className='cursor-pointer relative overflow-hidden flex items-center justify-between list-none shadow-md py-2 px-4 font-mono text-xl'
        >
            <div className='flex justify-between items-center w-full rounded font-mono'>
                {el.title}
                <div onClick={() => setIsScrolled(!isScrolled)}>
                    <BsArrowLeft className={`cursor-pointer ${isScrolled ? 'rotate-180' : 'rotate-0'} hover:text-[26px] transition-all`}/>
                </div>
            </div>
            <div
                onClick={() => addToFavorite(el)}
                className={`text-xl transition-all ${isScrolled ? 'right-0' : 'mr-[-100%]'} top-0 px-2 mx-4 py-3 text-xl bg-red-700 text-white border rounded`}>
                <BsTrashFill/>
            </div>
        </li>
    );
};

export default FavoriteList;