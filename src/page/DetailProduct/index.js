import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const DetailProduct = () => {
    const {productId} = useParams()
    const {products} = useSelector(state => state)
    const detail = products.find(el => el.id === productId * 1)
    return (
        <div className='container'>
            <div className="detail pt-36">
                <img width={350} src={detail.image} alt=""/>
                <h1 className='text-xl font-mono'>{detail.title}</h1>
            </div>
        </div>
    );
};

export default DetailProduct;