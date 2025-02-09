import { configureStore } from "@reduxjs/toolkit";
import screenSlice from "./features/screenSize/screenSlice";


export const store = configureStore({
    reducer:{
        screen : screenSlice
    },
    devTools:true,
})