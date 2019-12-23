import styled from "styled-components";

export default () => (
    <LoginWrapper>
        <div className="login_container">
            <div className="text-field">
                <input type="text" />
            </div>
            <div className="text-field">
                <input type="password" name="" id="" />
            </div>
            <div className="text-field btn">
                Submit
            </div>
        </div>
    </LoginWrapper>
)

const LoginWrapper = styled.div`
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .login_container {
        max-width: 450px;
        width:100%;
    }
    .text-field + .text-field{
        margin-top:10px;
    }
    input {
        font-size: 16px;
        width:100%;
        height:40px;
        line-height:40px;
        padding:0 10px;
        border-radius:5px;
    }
    .btn {
        border-radius:5px;
        width:100%;
        padding:0;
        height:40px;
        line-height:40px;
        background-color: #fff;
        padding:0 10px;
        text-align:center;
    }
`