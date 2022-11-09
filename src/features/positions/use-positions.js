import { useSelector } from 'react-redux';

import {  selectVisiblePosition } from "./position-slice";

import { selectorFilter } from "features/filter/filter-slice";



export const usePositions = () => {

    const currentFilter = useSelector(selectorFilter)
    const position = useSelector((state) => selectVisiblePosition(state, currentFilter))


    return position
}
