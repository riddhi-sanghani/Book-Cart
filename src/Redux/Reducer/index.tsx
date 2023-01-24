import { Console } from "console";
import { stat } from "fs";
import * as actionTypes from "../Actions/Actiontype";
export interface IBook {
  title: string;
  author: string;
  description: string;
  id: string;
  url: string;
  price: number;
  count?: number;
}

type BookId = {
  bookId: string;
};
export type BookState = {
  Books: IBook[];
  Cart: IBook[];
};
//addToCart
export interface BookFetchAction {
  type: "fetch";
  payload: IBook[];
}
export interface BookAddToCartAction {
  type: "addToCart";
  payload: IBook;
}

export interface RemoveCartAction {
  type: "RemoveFromCart";
  payload: BookId;
}
export type BookAction =
  | BookFetchAction
  | BookAddToCartAction
  | RemoveCartAction;

const initialState: BookState = {
  Books: [],
  Cart: [],
};
const reducer = (
  state: BookState = initialState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case "fetch":
      return { ...state, Books: action.payload };
    case "addToCart":
      var cartData: IBook | undefined = state.Cart.find(
        (item) => item.id == action.payload.id
      );
      console.log(cartData, "cartData");
      const updatedList = state.Cart.map((x) => {
        if (x.id === cartData?.id)
          return {
            ...x,
            count: x.count ? x.count + 1 : 1,
          };
        return x;
      });

      console.log(updatedList, "updatedList");
      return {
        ...state,
        Cart: cartData
          ? updatedList
          : [...state.Cart, { ...action.payload, count: 1 }],
      };
    case "RemoveFromCart":
      console.log(action.payload, "action.payload");
      return {
        ...state,
        Cart: state.Cart.filter((item) => item.id != action.payload.bookId),
      };

    default:
      return state;
  }
};

export default reducer;
