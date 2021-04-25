import React, {createContext, useContext, useReducer} from 'react';



// skapar en custom hook för contexten
const CartContext = createContext();
export const useCart = () => useContext(CartContext)






const initialState = { cart : [], products: [] }

// reducer, förvarar och uppdaterar ditt 'state'
// reducer tar alltså ditt state, och action.type i switch för att hitta rätt funktion
function reducer(state, {type, payload}) {
    switch(type){

        case 'SEED_PRODUCTS':
            // hämtar och sparar produkter från API:et i initialState
            // returnerar (...state) <= tar gamla 'statet' och lägger dit produkterna (payload)
            return {
                ...state,
                products: payload
            } 

        case 'ADD':
            // returnerar gamla 'statet' men hittar den produkt med samma id(payload) från state.products 
            // arrayen. Lägger till den produkten i state.cart arrayen
            return{
                ...state, cart: [...state.cart, state.products.find((product) => product.id === payload)]
            }

        case 'REMOVE':
            // hittar produktindex med hjälp av produkt id
            // skapar en ny cart variabel
            // använder splice för att ta bort 1st från cartarrayen med plats: indexincart
            // returnerar newCart arrayen
            const indexInCart = state.cart.findIndex((product) => product.id === payload);
            const newCart = [...state.cart];
            newCart.splice(indexInCart, 1);
            return {...state, cart: newCart};

        case 'EMPTY':
            return { ...state, cart: [] }

        default: 
            return state;
    }
}



// cart context för cartcontext provider, de olika funktioner och datan som ska kunna delas 
// och finnas tillgängligt för de olika komponenterna i appen

export function CartProvider({children}){

    const [state, dispatch] = useReducer(reducer, initialState);

    // funktion för att "ladda/spara produkterna"
    function seedProducts(data){
        dispatch ({ type: 'SEED_PRODUCTS', payload: data });
    }

    // funktion för att lägga till produkt i varukorg
    function addItem (id) {
        dispatch ({ type: 'ADD', payload: id })
    }

    // funktion för att ta bort produkten ur varukorgen
    function removeItem (id) {
        dispatch ({ type: 'REMOVE', payload: id }) 
    }

    // funktion för att räkna antalen i varukorgen
    function countItemsInCart(id){
        const itemsInCart = state.cart.filter((product) => product.id === id) ?? [];
        return itemsInCart.length
    }

    // funktion för att beräkna totalsumman i varukorgen
    // tar den nya grupperade arrayen, och använder reduce
    // den börjar på 0 och returnerar produktens pris * antal
    function totalPrice () {
        return groupCartItems().reduce((totalPrice, product)=> {
            return totalPrice + product.price * product.quantity
        }, 0)
    }

    function stockValue(stock, id){
        const value = stock - countItemsInCart(id)
        if(value <= 0){
            return "out of stock"
        }
        return value

    }

    // funktion för att gruppera pordukterna av samma sort i varukorgen för att inte 
    // ha dubbletter utan öka quantity istället.

    function groupCartItems(){
        return state.cart.reduce((newCart, product) => {
            // kollar newCart array efter en produkt
            const indexInCart = newCart.findIndex((p) => p.id === product.id)
            const isInCart = indexInCart !== -1; // returnerar -1 om den inte hittar produkten

            // om produkten finns, öka antalet
            if(isInCart){
                newCart[indexInCart].quantity = newCart[indexInCart].quantity +1
                return newCart
            }
            // om produkten inte finns, lägg den i arrayen
            newCart.push({...product, quantity: 1})
            return newCart;
        }, [])
    }

    function emptyCart(){
        dispatch({ type: 'EMPTY'})
    }
    


    return(
        <CartContext.Provider value={{
            addItem,
            removeItem ,
            cart: state.cart,
            products: state.products,
            countItemsInCart,
            totalPrice: totalPrice(),
            seedProducts,
            cartGroupedByItems: groupCartItems(),
            emptyCart,
            stockValue
        }}>

            {children}
        </CartContext.Provider>
    )
}