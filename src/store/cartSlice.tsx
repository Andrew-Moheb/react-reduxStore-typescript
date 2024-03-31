import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type cartItem = {
    id: string,
    title: string,
    price: number,
    quantity: number,
}

type cartState = {
    items: cartItem[]
}

const initialState: cartState = {
    items: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action: PayloadAction<{
            id: string,
            title: string,
            price: number,
        }>) {
            const itemIdex = state.items.findIndex((item) => item.id === action.payload.id);

            if (itemIdex >= 0) {
                state.items[itemIdex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIdex = state.items.findIndex((item) => item.id === action.payload);

            if (state.items[itemIdex].quantity === 1) {
                state.items.splice(itemIdex, 1)
            } else {
                state.items[itemIdex].quantity--;
            }

        }
    }
})


export const { addtoCart, removeFromCart } = cartSlice.actions