import React, { Component } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  flex:1;
  flex-direction:column;
`;

const Card = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content:center;
  box-shadow:0 0px 3px 0 #ddd;
  margin:20px;
`;

const Reset = styled.button`
    margin:20px;
    padding:20px 0;
    background-color: transparent;
`

const RootPage = ({ store }) => {
  const { reset, list } = store.RootPageStore;
  return (
    <Contain>
      {list.map(item => (
        <Card key={item.id}>
          <h6>{item.username}</h6>
        </Card>
      ))}
      <Reset onClick={() => reset()}>reset value</Reset>
    </Contain>
  );
};

export default inject("store")(observer(RootPage));
