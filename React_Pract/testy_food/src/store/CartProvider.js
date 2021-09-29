import { useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.identifier === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {

            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItems;
        } else {
            updatedItems = state.item.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.identifier === 'REMOVE') {
        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1){
            updatedItems = state.items.filter(item=> item.id !== action.id);
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount -1 }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemtoCartHandler = (item) => {
        dispatchCartAction({ identifier: 'ADD', item: item });
    };

    const removeItemtoCartHandler = (id) => {
        dispatchCartAction({ identifier: 'REMOVE', id: id });
    };

    const cartContext = {
        item: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemtoCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;