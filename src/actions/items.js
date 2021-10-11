import {
    DRAW_LOAD_ITEM
  } from "../constants";

import axios from "axios";



const drawLoadItem = (items) => ({
    type: DRAW_LOAD_ITEM,
    items,
  });

export const loadItem = () => {
    return (dispatch) => {
      return axios
        .get("https://jsonplaceholder.typicode.com/posts"
        )
        .then((items) => {
          dispatch(
            drawLoadItem(
              items.data
            )
          );
        });
    };
  };