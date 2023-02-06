import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateAddNewVaccineApi } from "../../Api/UpdateApi";
import { InnerFieldset, OutterFieldset } from "../../Styles/GlobalStyles";

export default function VaccineJSX({ _id, back, cpf, susNumber }) {
    const [healthUnit, setHealthUnit] = useState('');
    const [cnes, setCnes] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [batch, setBatch] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [vaccinator, setVaccinator] = useState('');
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));

    function handleForm(e) {
        e.preventDefault();
        const body = {};

        if (!day || !month || !year) {
            body.date = new Date();
        } else {
            body.date = new Date(`${year}/${month}/${day}`);
        }

        body.healthUnit = healthUnit
        body.cnes = cnes;
        body.batch = batch;
        body.manufacturer = manufacturer;
        body.vaccinator = vaccinator;
        body._id = _id;
        const config = {
            headers: {
                Authorization: `Bearer ${session.token}`,
                logintype: session.loginType
            }
        };

        const put = updateAddNewVaccineApi(body, config);

        put.then(() => {
            const body = {
                cpfSearch: cpf,
                susNumberSearch: susNumber,
                back: back
            }
            alert("Vacina cadastrada com sucesso");
            navigate('/getuser', { state: body });
        });

        put.catch((error) => {
            alert(error.response.data.message);
        });
    }

    return (
        <>
            <OutterFieldset>
                <legend><div className="legend">Adicionar vacina</div></legend>
                <InnerFieldset>
                    <legend><div className="legend">Informações de vacinação</div></legend>
                    <Form onSubmit={handleForm}>
                        <div className="healthUnit">Unidade de Saúde: <input type="text" id="healthUnit" placeholder="Unidade de saúde" value={healthUnit} onChange={(e) => { setHealthUnit(e.target.value) }} required></input></div>
                        <div className="cnes">CNES: <input type="text" id="cnes" placeholder="CNES" value={cnes} onChange={(e) => { setCnes(e.target.value) }} required></input></div>

                        <div className="date">
                            <div className="day">Dia: <select name="languages" id="day" value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="">dia</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select></div>

                            <div className="month">Mês: <select name="languages" id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                                <option value="">mês</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select></div>

                            <div className="year">Ano: <select name="languages" id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                                <option value="">ano</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select></div>
                        </div>

                        <div className="batch">Lote: <input type="text" id="batch" placeholder="Lote" value={batch} onChange={(e) => { setBatch(e.target.value) }} required></input></div>
                        <div className="manufacturer">Fabricante: <input type="text" id="manufacturer" placeholder="Fabricante" value={manufacturer} onChange={(e) => { setManufacturer(e.target.value) }} required></input></div>
                        <div className="vaccinator">Vacinador: <input type="text" id="vaccinator" placeholder="Vacinador" value={vaccinator} onChange={(e) => { setVaccinator(e.target.value) }}></input></div>

                        <ButtonWrapper><Button>Cadastrar vacina</Button></ButtonWrapper>
                    </Form>
                </InnerFieldset>
            </OutterFieldset>
        </>
    );
}

const Form = styled.form`
    margin: 0px 0px 100px 0px;

    .date {
        display: flex;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`

`;