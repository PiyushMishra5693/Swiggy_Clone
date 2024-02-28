import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cardSlice"


const appstore = configureStore({

    reducer:{
        cart:cartReducer,
    }
    
});

export default appstore;