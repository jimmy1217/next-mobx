import styled from "styled-components";
import { useObserver } from "mobx-react";
import { useEffect } from 'react';
import { useStore } from '@store'

import loginBackground from '@static/images/bg.jpg?lqip';
import LoginForm from './components/LoginForm';

function LoginPageEntry({ initialState }) {
  const { loginStore } = useStore(initialState);
  useEffect(() => {
    loginStore.checkImgLoad(loginBackground.src)
    // componentDidMount is here!
  }, [])
  return useObserver(() => {
    const { isLogin, imgDidLoad } = loginStore;
    return (
      <LoginWrapper img={!imgDidLoad ? loginBackground.preSrc : loginBackground.src}>
        <div className={`nav_container h-full ${isLogin ? "login" : ""}`}></div>
        <div className={`login_container relative rounded-lg p-5 pt-32 w-full ${isLogin ? "login" : ""}`}>
          <LoginForm />
        </div>
      </LoginWrapper>
    );
  });
}

export default LoginPageEntry;

const LoginWrapper = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 0 75%;
  .login_container {
    max-width: 350px;
    min-height: 320px;
    height: 320px;
    background-color: rgba(255, 255, 255, 0.9);
    will-change:max-width, height;
    transition: all 0.6s cubic-bezier(0.16, 1.3, 0, 1.01) 0.25s;
    &.login {
      max-width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 0;
    }
  }
  .nav_container {
    width: 240px;
    background-color: #252d3a;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    transition: transform 0.3s ease-in-out;
    transform: translate3d(0, -100%, 0);
    &.login {
      transition: transform 0.3s ease-out 0.32s;
      transform: translate3d(0, 0, 0);
    }
  }
  .top_card {
    text-align: center;
    position: absolute;
    top: -10%;
    left: 50%;
    width: 310px;
    height: 130px;
    transform: translate3d(-50%, 0, 0);
    background: linear-gradient(60deg, #a59aa7, #5f5761);
    border-radius: 5px;
    padding: 20px;
    color: #fff;
    transition: all 0.3s ease;
    box-shadow: 0 12px 20px -10px rgba(115, 115, 115, 0.28),
      0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(208, 208, 208, 0.2);
    will-change:width, height;
    h4 {
      letter-spacing: 3px;
      font-weight: 300;
      opacity: 1;
      transition: opacity 0.8s ease 0.5s;
    }
    &.fixed_top {
      position: absolute;
      width: 100%;
      height: 50px;
      top: 0;
      left: 0;
      transform: translate3d(0, 0, 0);
      background: linear-gradient(60deg, #fff, #fff);
      border-radius: 0;
      z-index: 3;
      box-shadow:none;
      border-bottom: 1px solid #ddd;
      h4 {
        opacity: 0;
        transition: opacity 0.3s ease 0s;
      }
    }
  }
  .text-field + .text-field {
    margin-top: 10px;
  }

  input {
    font-size: 16px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 5px;
  }
  /* .btn {
    border-radius: 5px;
    width: 100%;
    padding: 0;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    padding: 0 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: scale(1);
    &:hover {
      background-color: #ddd;
    }
    &:active {
      transform: scale(0.9);
    }
  } */
`;
