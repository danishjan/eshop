import { Dispatch } from "react"
import { Action, State } from "./contextManager"

export interface IGlobalState{
    state: State
    dispatch: any,
    addItem: (para: any) => void;
    addToCart: any;
    removeFromCart: any;
    updateTotalAmount:any;
}
export const typesca = {
    ADD_ITEM: "ADD_ITEM",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    UPDATE_TOTAL_AMOUNT: "UPDATE_TOTAL_AMOUNT"
}