import { filterReducer } from "features/filter/filter-slice";
import { positionReducer } from "features/positions/position-slice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer : {
        filters : filterReducer,
        position : positionReducer,
    },
    devTools : true,
    
});