import React from 'react';
import {useSelector} from "react-redux";
import AddToBasketBtn from "../../../UI/AddToBasketBtn";
import NavigateToBasketBtn from "../../../UI/NavigateToBasketBtn";
import ToFavoriteBtn from "../../../UI/ToFavoriteBtn";
import {Link} from "react-router-dom";

const ProductCard = ({el}) => {


    const {basket} = useSelector(s => s)
    const found = basket.some(b => b.id === el.id)

    return (
        <div className='w-[20%] mx-4 my-4 flex flex-col items-center'>
            <Link to={`/product/detail/${el.id}`}>
                <img width={220} src={el.image} alt="img"/>
            </Link>
            <h1 className='font-bold text-xl'>{el.title}</h1>
            <p className='text-lg my-2'>{el.price} som</p>
            <div className='flex'>
                {found ? <NavigateToBasketBtn/> : <AddToBasketBtn el={el}/>}
                <ToFavoriteBtn el={el}/>
            </div>
        </div>
    );
};

export default ProductCard;