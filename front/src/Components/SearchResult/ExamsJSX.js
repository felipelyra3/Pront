import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateAddNewExamApi } from "../../Api/UpdateApi";
import { InnerFieldset, OutterFieldset } from "../../Styles/GlobalStyles";

export default function ExamJSX({ _id, back, cpf, susNumber }) {
    const [examType, setExamType] = useState('');
    const [place, setPlace] = useState('');
    const [link, setLink] = useState('');
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));

    function handleForm(e) {
        e.preventDefault();
        const body = {
            examType,
            place,
            link,
            result,
            _id
        }

        if (!link) {
            delete body.link;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${session.token}`,
                logintype: session.loginType
            }
        };

        const put = updateAddNewExamApi(body, config);

        put.then(() => {
            const body = {
                cpfSearch: cpf,
                susNumberSearch: susNumber,
                back: back
            }
            alert("Exame cadastrado com sucesso");
            navigate('/getuser', { state: body });
        });

        put.catch((error) => {
            alert(error.response.data.message);
        });
    }
    return (
        <>
            <OutterFieldset>
                <legend><div className="legend">Adicionar exame</div></legend>
                <InnerFieldset>
                    <legend><div className="legend">Informações do exame</div></legend>
                    <Form onSubmit={handleForm}>
                        <div className="examType">Tipo de exame: <input type="text" id="examType" placeholder="Tipo de exame" value={examType} onChange={(e) => { setExamType(e.target.value) }} required></input></div>
                        <div className="place">Local da realização do exame: <input type="text" id="place" placeholder="Local da realização do exame" value={place} onChange={(e) => { setPlace(e.target.value) }} required></input></div>
                        <div className="link">Link para o exame original: <input type="text" id="link" placeholder="Link para o exame original" value={link} onChange={(e) => { setLink(e.target.value) }}></input></div>
                        {/* <div className="result">Resultado do exame: <input type="text" id="result" placeholder="Resultado do exame" value={result} onChange={(e) => { setResult(e.target.value) }} required></input></div> */}
                        <div className="result">Resultado do exame: <textarea rows="8" cols="50" id="result" placeholder="Resultado do exame" value={result} onChange={(e) => { setResult(e.target.value) }} required></textarea></div>

                        <ButtonWrapper><Button>Cadastrar alergia(s)</Button></ButtonWrapper>
                    </Form>
                </InnerFieldset>
            </OutterFieldset>
        </>
    );
}

const Form = styled.form`
    margin: 0px 0px 100px 0px;

    .result {
        display: flex;
        align-items: flex-start;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`

`;
