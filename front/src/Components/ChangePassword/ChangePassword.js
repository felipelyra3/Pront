import { Body, Page, InnerFieldset, AddButton } from "../../Styles/GlobalStyles.js";
import Header from "../DefaultLoggedPage/Header.js";
import styled from "styled-components";
import { useState } from "react";
import Logout from "../../Api/Logout.js";
import { useNavigate } from "react-router-dom";
import { updateOwnPasswordByCPF } from "../../Api/UpdateApi.js";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { BiRun } from "react-icons/bi";

export default function ChangePassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;

    function handleLogout() {
        Logout();
        navigate('/');
    }

    function handleForm(e) {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage('As duas senhas precisam ser iguais');
        } else if (!passwordRegex.test(newPassword)) {
            setErrorMessage("Sua senha precisa ter no mínimo 8 caracteres, necessitando ter pelo menos uma letra, um número e um caractere especial")
        } else {
            const body = {
                cpf: session.cpf,
                password: newPassword,
            };
            const config = {
                headers: {
                    Authorization: `Bearer ${session.token}`,
                    logintype: session.loginType
                }
            };

            const put = updateOwnPasswordByCPF(body, config);

            put.then(() => {
                alert("Nova senha cadastrada com sucesso");
                navigate('/homepage');
            });

            put.catch(() => {
                alert("Erro! Tente novamente");
            });
        }
    }

    return (
        <Body>
            <Page>
                {session.firstLogin ?
                    <Header /> :
                    <ArrowBackCircle onClick={() => { navigate('/homepage'); }} />}

                <Center>
                    <InnerFieldset>
                        <legend><div className="legend">Mudar senha</div></legend>

                        <Form onSubmit={handleForm}>
                            <div className="newPassword">Nova senha: <input type="password" id="newPassword" placeholder="Nova senha" value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} required /></div>
                            <div className="confirmPassword">Repita a nova senha: <input type="password" id="confirmPassword" placeholder="Confirme a nova senha" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} required /></div>

                            <ButtonWrapper><Button>Cadastrar nova senha</Button></ButtonWrapper>
                        </Form>
                        <Center><Error>{errorMessage}</Error></Center>

                    </InnerFieldset>
                </Center>
                <Center><AddButton onClick={() => { handleLogout() }}><Run />Sair</AddButton></Center>
            </Page>
        </Body>
    );
}

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const Form = styled.form`

`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 12px 0px 0px 0px;
`;

const Button = styled.button`

`;

const Error = styled.div`
    display: flex;
    justify-content: center;
    color: red;
    margin: 12px 0px 0px 0px;
    max-width: 300px;
`;

const Run = styled(BiRun)`
    color: #000000;
    transform: scale(1.5);
    margin: 0px 0px 12px 0px;
`;

const ArrowBackCircle = styled(IoIosArrowRoundBack)`
    position: fixed;
    top: 24px;
    left: 80px;
    color: #000000;
    transform: scale(3);
    border: 1px solid black;
    border-radius: 100%;
    margin: 4px 60px 60px 24px;
    cursor: pointer;
    :hover {
        color: #0699BA;
        border: 1px solid #0699BA;
        background-color: #F6F6F6;
    }
`;