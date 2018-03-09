import * as types from "./constants";
import data from '../Components/Data'

export const ADD_BASKET = () =>{
    return {
    type : 'ADD_BASKET',
    payload : data[0]
}
}
export const REMOVE = () =>{
    return {type : 'REMOVE'}
}