import React from 'react';
import BasketTable from "./BasketTable";
import {useSelector} from "react-redux";
import {NavLink, Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s => s)
    return (
        <div className='py-40 text-amber-500 container'>
            <h1 className='text-center font-mono text-3xl my-2'>Basket</h1>
            {basket.length > 0 ? < BasketTable/> :
                <Link to={'/'}>
                    <div
                        className='mx-6 my-4 bg-amber-400 text-white text-center w-[200px] mx-auto py-4 font-mono text-xl rounded cursor-pointer my-10'>ADD
                        PRODUCT+
                    </div>
                    }
                </Link>
            }
        </div>
    );
};

export default Basket;