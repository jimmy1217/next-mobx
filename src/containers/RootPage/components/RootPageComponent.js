import React, { useState, useEffect } from "react";
import { observer, Observer, useLocalStore } from "mobx-react";
import styled from "styled-components";
import { useMorph } from "react-morph";
import { useStores } from "@store/store"

const Contain = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  box-shadow: 0 0px 3px 0 #ddd;
  margin: 20px;
  color: #ddd;
`;

const Reset = styled.div`
  border:1px solid #ddd;
  color:#ddd;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 20px;
  padding: 20px 0;
  background-color: transparent;
`;


const RootPage = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log('component did mount')
    return () => {
      console.log('component will unmount')
    };
  }, []);

  const morph = useMorph();
  const RootPageStore = useStores().store.RootPageStore;
  const { list } = RootPageStore;
  return (
    <Contain>
      {!toggle && (
        <div {...morph}>
          <Reset
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            reset value
          </Reset>
        </div>
      )}

      {toggle && (
        <div {...morph}>
          {list?.map(item => (
            <Card key={item?.id}>
              <h6>{item?.username}</h6>
            </Card>
          ))}
          <Reset
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            reset value
          </Reset>
        </div>
      )}
    </Contain>
  )
};

export default observer(RootPage);
