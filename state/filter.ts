/* 
========================================
Current State of filter and function to modify state
======================================== 
*/

import { Filter } from "../model/filter";

type FilterType = (typeof Filter)[keyof typeof Filter];

let filter: FilterType = Filter.ACTIVE;

function setFilter(newFilter) {
    switch (newFilter) {
        case 'completed':
            filter = Filter.COMPLETED;
            break;
        case 'all':
        default:
            filter = Filter.ACTIVE;
    }
}

export { filter, setFilter };