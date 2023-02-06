import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateAddNewAllergyApi } from "../../Api/UpdateApi";
import { InnerFieldset, OutterFieldset } from "../../Styles/GlobalStyles";

export default function AllergyJSX({ _id, back, cpf, susNumber }) {
    const [allergies, setAllergies] = useState('');
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));

    function handleForm(e) {
        e.preventDefault();
        const body = {
            _id: _id,
            allergies: allergies.split(",")
        };
        const config = {
            headers: {
                Authorization: `Bearer ${session.token}`,
                logintype: session.loginType
            }
        };

        const put = updateAddNewAllergyApi(body, config);

        put.then(() => {
            const body = {
                cpfSearch: cpf,
                susNumberSearch: susNumber,
                back: back
            }
            alert("Alergia(s) cadastrada(s) com sucesso");
            navigate('/getuser', { state: body });
        });

        put.catch((error) => {
            alert(error.response.data.message);
        });
    }

    return (
        <>
            <OutterFieldset>
                <legend><div className="legend">Adicionar alergia</div></legend>
                <InnerFieldset>
                    <legend><div className="legend">Alergias (separar por vírgula)</div></legend>
                    <Form onSubmit={handleForm}>
                        <div className="allergies"><input type="text" id="allergies" placeholder="Alergias (separe por vírgulas)" value={allergies} onChange={(e) => { setAllergies(e.target.value) }} required></input></div>

                        <ButtonWrapper><Button>Cadastrar alergia(s)</Button></ButtonWrapper>
                    </Form>
                </InnerFieldset>
            </OutterFieldset>
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px 100px 0px;

    .allergies {
        input[type=text] {
            width: 100%;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`

`;