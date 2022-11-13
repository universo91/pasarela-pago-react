export const initialState = {
    //basket =~ sesta o carrito
    basket: [],
    user: null
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    DEL_TO_BASKET: "DEL_TO_BASKET",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET"
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}
 
const reducer = (state , action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_BASKET: 
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case actionTypes.DEL_TO_BASKET:
            //antes de eliminar o sacar del carrito de compras un producto, primero debemos ubicar el indice 
            //del elemento al que le dimos click para eliminar, la principal razon es que se podria tener una cantidad de productos
            //con el mismo id, y si la eliminacion es por ese lado, todos los elementos con el mismo 
            //id serian eliminados.
            const index = state.basket.findIndex( basketItem => basketItem.id === action.id );
            const copyBasket = [...state.basket ];
            if( index >= 0) 
            { 
                //eliminamos un elmento, que se encuentra en el indice index, y a partir de ahi 
                //incluido el index, se elimina un elemento.
                copyBasket.splice(index, 1);
            } else {
                console.log("Can´t remove product");
            }
            return {
                ...state,
                basket: copyBasket
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.EMPTY_BASKET:
            return initialState;
            
        default: 
            return state;        
    }
}
export default reducer;