import { createSlice } from "@reduxjs/toolkit";


export const positionSlice = createSlice({
    name : 'Positions',
    initialState : [],
    reducers : {
        addPosition : (state,action) => 
            action.payload
    }
})


export const {addPosition} = positionSlice.actions;

export const positionReducer = positionSlice.reducer;

export const selectVisiblePosition = (state, filter = []) => {
    if(filter.length === 0) return state.position;

    return state.position.filter(pos => {
        const posFilter = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)

        return filter.every(filter => posFilter.includes(filter))
    });
};