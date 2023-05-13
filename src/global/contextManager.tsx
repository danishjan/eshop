import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { IGlobalState } from "./type";
import axios from "axios";

// Define types for state and actions
export interface State {
  items: Item[];
  cart: Item[];
  totalAmount: number;
}

export interface Item {
  id?: number;
  title: string;
  description: string;
  thumbnail: string | undefined;
  images: string[];
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  rating?: number;
}

interface Iprops {
  children: any;
}

export type Action =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "ADD_TO_CART"; payload: Item }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "UPDATE_TOTAL_AMOUNT"; payload: number };

// Define initial state
const initialState: State = {
  items: [],
  cart: [],
  totalAmount: 0,
};

// Create context
const globalContext = createContext<Partial<IGlobalState>>({});
export const useGlobalContext = () => useContext(globalContext);

// Define reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      if(action?.payload.id){
        const itemExists = state.items.some(
          (item) => item.id === action.payload.id
        );
        if (itemExists) {
          // Return current state if item already exists
          return state;
        } else {
          // Add item to state if it doesn't already exist
          return {
            ...state,
            items: [...state.items, action.payload],
          };
      }
      }else{
        const id = state.items?.length + 1;
        const item = {id, ...action.payload }
        return {
        ...state,
          items: [...state.items, item],
        };
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: action.payload,
      };
    default:
      return state;
  }
};

// Create provider component
export const GlobalProvider: React.FC<Iprops> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  // Define actions
  const addItem = useCallback((item: Item[]) => {
    item.forEach((newItem) => {
      const itemExists = state.items.some(
        (item) => item.id === newItem.id
      );
      if (!itemExists) {
        memoizedDispatch({
          type: "ADD_ITEM",
          payload: newItem,
        });
      }
    });
  }, [memoizedDispatch, state.items]);

  const addToCart = (item: Item) => {
    memoizedDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const removeFromCart = (item: { id: number }) => {
    memoizedDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };

  const updateTotalAmount = (amount: number) => {
    memoizedDispatch({
      type: "UPDATE_TOTAL_AMOUNT",
      payload: amount,
    });
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
          addItem(response.data?.products);
          console.log("heellelel");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [addItem, memoizedDispatch]);

  console.log(state, "addItem");

  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
        addItem,
        addToCart,
        removeFromCart,
        updateTotalAmount,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
