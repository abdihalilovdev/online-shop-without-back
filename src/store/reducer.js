import {ADD_TO_BASKET, ADD_TO_FAVORITES, DECREASE_QUANTITY, DELETE_FROM_BASKET, GET_PRODUCT} from "./ActionTypes";


const initialState = {
    products: [],
    favorites: [],
    basket: [],
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT : {
            return {...state, products: action.payload}
        }
        case ADD_TO_BASKET : {
            const found = state.basket.find(p => p.id === action.payload.id)
            if (found) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1}
                        : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }
        case DELETE_FROM_BASKET : {
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        }
        case DECREASE_QUANTITY: {
            return {
                ...state, basket: state.basket.map(el => {
                    if (el.id === action.payload && el.quantity > 1) {
                        return {...el, quantity: el.quantity - 1}
                    } else return el
                })
            }
        }
        case ADD_TO_FAVORITES : {
            const found = state.favorites.some(el => el.id === action.payload.id)
            if (!found){
                return {...state,favorites: [...state.favorites,action.payload]}
            }
            return {...state,favorites: state.favorites.filter(f => f.id !== action.payload.id)}
        }
        default : {
            return state
        }
    }
}