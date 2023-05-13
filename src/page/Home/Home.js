import React, {useEffect} from 'react';
import {allProduct} from "./data";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET, GET_PRODUCT} from "../../store/ActionTypes";
import ProductCard from "./ProductCard";

const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(s => s)
    useEffect(() => {
        dispatch({type: GET_PRODUCT, payload: allProduct})
    }, [])
    console.log(products)
    return (
        <div className='container pt-36'>
            <div className='flex flex-wrap justify-between'>
                {
                    products.map(el => <ProductCard key={el.id} el={el}/>)
                }
            </div>
        </div>
    );
};

export default Home;