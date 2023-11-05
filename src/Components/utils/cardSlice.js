import { createSlice } from "@reduxjs/toolkit";



const cardSlice = createSlice({

    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{

        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:()=>{
            // state.items.length=0;
            return {items:[]}
        }

    }
})


export const { addItem,removeItem,clearCart} = cardSlice.actions;

export default cardSlice.reducer;