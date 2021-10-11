import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import {
  loadItem,
} from "../actions/items";


export default function Card() {

  const { items } = useSelector(
    (state) => ({
      items: state.items,
    }),
    shallowEqual
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItem());
  }, [dispatch]);

  const nodeList = items.map((item, index) => {
    return (
      <div className="card col-sm-3 mx-3 mb-4" key={item.id}>
        <div></div>
        <div className="card-body">
          <h5 className="card-title border-bottom py-3">User ID: {item.userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted border-bottom py-3">ID: {item.id}</h6>
          <h6 className="card-text border-bottom py-3">Title: {item.title}</h6>
          <p className="card-text border-bottom">Body: {item.body}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="row">
      {nodeList}
    </div>
  )
}
