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
        removeItem:(state,action)=>{
            // const index=action.payload;
            // state.items=  state.items.filter( (obj)=> obj.card.info.id!== index.card.info.id)
        },
        clearCart:()=>{
            // state.items.length=0;
            return {items:[]}
        }

    }
})


export const { addItem,removeItem,clearCart} = cardSlice.actions;

export default cardSlice.reducer;