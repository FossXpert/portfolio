import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sSize: "",
    isMobile: false,
    isTablet: false
};

const screenSlice = createSlice({
    name: "screenSize",
    initialState,
    reducers: {
        setScreen: (state, action) => {
            state.sSize = action.payload.sSize;
            state.isMobile = action.payload.isMobile;
            state.isTablet = action.payload.isTablet;
        }
    }
});

export const { setScreen } = screenSlice.actions;
export default screenSlice.reducer;
