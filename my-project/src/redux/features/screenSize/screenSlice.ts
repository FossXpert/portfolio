import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sSize: "",
    isMobile: false,
    // isTablet: false,
    isDesktop:false,
    currPxl:""
};

const screenSlice = createSlice({
    name: "screenSize",
    initialState,
    reducers: {
        setScreen: (state, action) => {
            state.currPxl = action.payload.currPxl;
            state.sSize = action.payload.sSize;
            state.isMobile = action.payload.isMobile;
            // state.isTablet = action.payload.isTablet;
            state.isDesktop = action.payload.isDesktop;
        }
    }
});

export const { setScreen } = screenSlice.actions;
export default screenSlice.reducer;
