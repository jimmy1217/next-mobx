import React, { Component } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

const RootPage = ({ store }) => {
  const { reset, list } = store.RootPageStore;
  return (
    <div>
      {list.map(item => (
        <ul key={item.id}>
          <li>{item.username}</li>
        </ul>
      ))}
      <button onClick={() => reset()}>reset value</button>
    </div>
  );
};

export default inject("store")(observer(RootPage));
