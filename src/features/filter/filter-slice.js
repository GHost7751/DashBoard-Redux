const { createSlice } = require("@reduxjs/toolkit");



const filterSlice = createSlice({
    name : 'Filter',
    initialState : [],
    reducers : {
        addFilter : (state, action) => {  
             if(!state.includes(action.filter)) {
                state.push(action.payload)
           }
        },
        removeFilter : (state,action) => {
            return state.filter(i => i !==  action.payload);
        },
        clearFilter : () => [],
        
    }
})

export const {addFilter,removeFilter,clearFilter} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectorFilter = (state) => state.filters;