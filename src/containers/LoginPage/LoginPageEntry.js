import styled from "styled-components";

export default () => (
  <LoginWrapper>
    <div className="login_container">
      <div className="top_card">
          <h4>login</h4>
      </div>
      <div className="text-field">
        <input type="text" />
      </div>
      <div className="text-field">
        <input type="password" name="" id="" />
      </div>
      <div className="text-field btn">Submit</div>
    </div>
  </LoginWrapper>
);

const LoginWrapper = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('static/images/bg.jpg');
  background-size: cover;
  background-position:0 75%;
  .login_container {
    position: relative;
    max-width: 350px;
    min-height: 500px;
    width: 100%;
    padding: 120px 20px 20px 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .top_card {
    text-align: center;
    position: absolute;
    top: -10%;
    left: 50%;
    width: 310px;
    height: 130px;
    transform: translate(-50%, 0);
    background: linear-gradient(60deg, #a59aa7, #5f5761);
    border-radius: 5px;
    padding: 20px;
    color: #fff;
    box-shadow: 0 12px 20px -10px rgba(115, 115, 115, 0.28),
      0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);
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
  .btn {
    border-radius: 5px;
    width: 100%;
    padding: 0;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    padding: 0 10px;
    text-align: center;
  }
`;
