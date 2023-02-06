import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoProntNoBackgroundWhiteAndGreen from "../../Assets/LogoProntNoBackgroundWhiteAndGreen.png";
import VerifyToken from "../../Api/VerifyToken";

export default function Login() {

    VerifyToken();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();

        const body = {
            cpf,
            password
        }

        const post = axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, body);

        post.then((answer) => {
            localStorage.setItem("session", JSON.stringify(answer.data));
            navigate('/homepage');
        });

        post.catch((error) => {
            setError('CPF ou senha inválidos');
        });
    }

    return (
        <>
            <Page>
                <img src={LogoProntNoBackgroundWhiteAndGreen} alt="Pront" />
                <ContainerLogin>
                    <Form onSubmit={handleForm}>
                        <input type="number" id="cpf" placeholder="CPF" value={cpf} onChange={(e) => { setCpf(e.target.value) }} required></input><br />
                        <Line />
                        <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                        <Line />
                        <ButtonWrapper><Button>Entrar</Button></ButtonWrapper>
                    </Form>
                    <Error>{error}</Error>
                </ContainerLogin>
            </Page>
        </>
    );
}

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,152,185,1) 0%, rgba(255,255,255,1) 100%);

    img {
        width: 236px;
        height: 236px;
        margin: 30px 0px 0px 24px;
    }
`;

const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 300px;
    border-radius: 2%;
    margin: 30px 0px 0px 0px;
`;

const Form = styled.form`
    border: none;

input {
    width: 326px;
    height: 58px;
    background: none;
    border-radius: 5px;
    border: none;
    background-color: none;
    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 15px;
    padding-left: 15px;
    outline: none;
}

input::placeholder {
    color: #FFFFFF;
    opacity: 1;
}
`;

const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: #FFFFFF;
    margin: -24px 0px 12px 12px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 104%;
`;

const Button = styled.button`
    width: 175px;
    height: 46px;
    background: #079BBB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;

const Error = styled.span`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 24px;
`;
