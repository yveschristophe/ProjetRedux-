import * as types from "../actions/constants";
import data from "../Components/Data";
import actions from "../actions/actions";
import CartesProduits from '../Components/CartesProduits'
const initialState = {
    arr: [],
};

export default function Panier(state = initialState.arr, action){
    switch(action.type){
        case 'ADD_BASKET':
            return state=[
                 ...state, 'test'
            ]
        break;
        case 'REMOVE':
        
        break;
    }
    return state
}