import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateUserByIDApi, updateUserPasswordByCPF } from "../../Api/UpdateApi";
import { OutterFieldset, ResetPasswordButton } from "../../Styles/GlobalStyles";
import { ImKey } from 'react-icons/im';

export default function EditResultJSX(old) {
    const [name, setName] = useState('');
    const [socialName, setSocialName] = useState('');
    const [cpf, setCpf] = useState('');
    const [gender, setGender] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [susNumber, setSusNumber] = useState('');
    const [crm, setCrm] = useState('');
    const [coren, setCoren] = useState('');
    const [phoneNumber1, setPhonenNumber1] = useState('');
    const [phoneNumber2, setPhonenNumber2] = useState('');
    const [phoneNumber3, setPhonenNumber3] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [plan, setPlan] = useState('');
    const [planNumber, setPlanNumber] = useState('');
    const [loginType, setLoginType] = useState('');
    const phoneNumbers = [];
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));

    useEffect(() => {
        if (old.name) {
            setName(old.name);
        }

        if (old.socialName) {
            setSocialName(old.socialName);
        }

        if (old.cpf) {
            setCpf(old.cpf);
        }

        if (old.gender) {
            setGender(old.gender);
        }

        if (old.dateBirthday) {
            setDay(old.dateBirthday.getDate());
            setMonth(old.dateBirthday.getMonth());
            setYear(old.dateBirthday.getFullYear());
        }

        if (old.email) {
            setEmail(old.email);
        }

        if (old.susNumber) {
            setSusNumber(old.susNumber);
        }

        if (old.crm) {
            setCrm(old.crm);
        }

        if (old.coren) {
            setCoren(old.coren);
        }

        if (old.phoneNumbers) {
            if (old.phoneNumbers[0]) {
                setPhonenNumber1(old.phoneNumbers[0]);
            }

            if (old.phoneNumbers[1]) {
                setPhonenNumber2(old.phoneNumbers[1]);
            }

            if (old.phoneNumbers[2]) {
                setPhonenNumber3(old.phoneNumbers[2]);
            }
        }

        if (old.address) {
            if (old.address.cep) {
                setCep(old.address.cep);
            }
            if (old.address.street) {
                setStreet(old.address.street);
            }
            if (old.address.number) {
                setNumber(old.address.number);
            }
            if (old.address.neighborhood) {
                setNeighborhood(old.address.neighborhood);
            }
            if (old.address.city) {
                setCity(old.address.city);
            }
            if (old.address.state) {
                setState(old.address.state);
            }
        }

        if (old.healthCare) {
            if (old.healthCare.plan) {
                setPlan(old.healthCare.plan);
            }
            if (old.healthCare.planNumber) {
                setPlanNumber(old.healthCare.planNumber);
            }
        }

        if (old.loginType) {
            setLoginType(old.loginType);
        }
    }, []);

    function handleForm(e) {
        e.preventDefault();

        const body = {};

        if (name.length < 3) {
            alert("Seu nome precisa ter mais de 3 caracteres");
            return;
        } else {
            body.name = name;
        }

        if (socialName === "" || socialName.length < 3) {
            body.socialName = name;
        } else {
            body.socialName = socialName;
        }

        if (gender === "" || !gender) {
            alert("Selecione uma opção de gênero");
            return;
        } else {
            body.gender = gender;
        }

        if (day === "" || !day) {
            alert("Selecione uma opção de dia para o nascimento");
            return;
        } else if (month === "" || !month) {
            alert("Selecione uma opção de mês para o nascimento");
            return;
        } else if (year === "" || !year) {
            alert("Selecione uma opção de mês para o nascimento");
            return;
        } else {
            const aux = new Date(`${year}/${month}/${day}`);
            body.birthday = aux;
        }

        if (cpf.length !== 11) {
            alert("Entre com um CPF válido");
            return;
        } else {
            body.cpf = cpf;
        }

        if (email !== "" && email.length < 5) {
            alert("Entre com um e-mail válido");
            return;
        } else if (email === "") {
            //
        } else {
            body.email = email;
        }

        if (susNumber !== "") {
            if (susNumber.length < 3) {
                alert("Entre com um número válido para carteira do SUS válido");
                return;
            } else {
                body.susNumber = susNumber;
            }
        }

        if (phoneNumber1 !== "") {
            if (phoneNumber1.length < 10) {
                alert("Entre com um número de telefone válido");
                return;
            } else {
                phoneNumbers.push(phoneNumber1);
            }
        }
        if (phoneNumber2 !== "") {
            if (phoneNumber2.length < 10) {
                alert("Entre com um número de telefone válido");
                return;
            } else {
                phoneNumbers.push(phoneNumber2);
            }
        }
        if (phoneNumber3 !== "") {
            if (phoneNumber3.length < 10) {
                alert("Entre com um número de telefone válido");
                return;
            } else {
                phoneNumbers.push(phoneNumber3);
            }
        }
        if (phoneNumbers.length > 0) {
            body.phoneNumbers = phoneNumbers;
        }

        if (cep.length !== 8) {
            alert("Entre com um CEP válido");
            return;
        } else if (street.length < 3) {
            alert("Entre com uma rua válida");
            return;
        } else if (!number || number === "" || number <= 0) {
            alert("Entre com um número de rua válido");
            return;
        } else if (neighborhood.length < 3) {
            alert("Entre com um bairro válido");
            return;
        } else if (city.length < 3) {
            alert("Entre com uma cidade válida");
            return;
        } else if (state === "" || !state) {
            alert("Entre com um estado válido");
            return;
        } else {
            const aux = { cep, street, number, neighborhood, city, state };
            body.address = aux;
        }

        if (plan !== "" || planNumber !== "") {
            if (plan.length < 3 || planNumber.length < 3) {
                alert("Entre com um plano de saúde e número do plano válidos");
                return;
            } else {
                const aux = { plan, planNumber };
                body.healthCare = aux;
            }
        }

        if (crm !== "") {
            if (crm.length < 3) {
                alert("Entre com um CRM válido");
                return;
            } else {
                body.crm = crm;
            }
        }

        if (coren !== "") {
            if (coren.length < 3) {
                alert("Entre com um COREN válido");
                return;
            } else {
                body.coren = coren;
            }
        }

        if (session.loginType === "admin") {
            if (loginType === "") {
                alert("Entre com tipo de login válido");
                return;
            } else {
                body.loginType = loginType;
            }
        } else if (session.loginType === "doctor" || session.loginType === "nurse" || session.loginType === "recepcionist") {
            body.loginType = "patient";
        }

        body._id = old._id;

        const config = {
            headers: {
                Authorization: `Bearer ${session.token}`,
                logintype: session.loginType
            }
        };

        const put = updateUserByIDApi(body, config);

        put.then(() => {
            const body = {
                cpfSearch: cpf,
                susNumberSearch: susNumber,
                back: old.back
            }
            alert("Cadastro atualizado com sucesso");
            navigate('/getuser', { state: body });
        });

        put.catch((error) => {
            alert(error.response.data.message);
        });
    }

    function handleResetPassword() {
        const answer = window.confirm(`Tem certeza que deseja resetar a senha de ${old.socialName}`);
        if (answer) {
            const password = (cpf.slice(0, 4)) + (socialName.slice(1, 3)) + (year);
            const body = {
                cpf: cpf,
                password: password
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${session.token}`,
                    logintype: session.loginType
                }
            };

            const put = updateUserPasswordByCPF(body, config);

            put.then(() => {
                const body = {
                    cpfSearch: cpf,
                    susNumberSearch: susNumber,
                    back: old.back
                }
                alert(`Senha de ${socialName} resetada com sucesso`);
                navigate('/getuser', { state: body });
            });

            put.catch(() => {
                alert("Error");
                navigate('/homepage');
            });
        }
    }

    return (
        <>
            <OutterFieldset>
                <legend><div className="legend">Editar informações de usuário</div></legend>
                <Form onSubmit={handleForm}>

                    <div className="name">Nome completo: <input type="text" id="name" placeholder="Nome completo" value={name} onChange={(e) => { setName(e.target.value) }} required /></div>

                    <div className="socialName">Nome social: <input type="text" id="name" placeholder="Nome social" value={socialName} onChange={(e) => { setSocialName(e.target.value) }} required /></div>

                    <div className="gender">Gênero: <select name="languages" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Opções</option>
                        <option value="mulherCis">Mulher Cis</option>
                        <option value="homemCis">Homem Cis</option>
                        <option value="mulherTrans">Mulher Trans</option>
                        <option value="homemTrans">Homem Trans</option>
                        <option value="outros">Outros</option>
                    </select></div>


                    <div className="birthday">
                        <p>Date de nascimento:</p>
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
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                            <option value="1904">1904</option>
                            <option value="1903">1903</option>
                            <option value="1902">1902</option>
                            <option value="1901">1901</option>
                            <option value="1900">1900</option>
                        </select></div>
                    </div>

                    <div className="CPF-Email-SUS">

                        <div className="cpf">CPF: <input type="number" id="cpf" placeholder="CPF" value={cpf} onChange={(e) => { setCpf(e.target.value) }} required></input></div>
                        <div className="email">E-mail: <input type="text" id="email" placeholder="E-mail" className="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input></div>
                        <div className="susNumber">Número do SUS: <input type="text" id="susNumber" placeholder="Número do SUS" value={susNumber} onChange={(e) => { setSusNumber(e.target.value) }}></input></div>
                    </div>

                    <div className="phoneNumbers">
                        <div className="phoneNumber1">Telefone: <input type="number" id="phoneNumber1" placeholder="Telefone" value={phoneNumber1} onChange={(e) => { setPhonenNumber1(e.target.value) }}></input></div>
                        <div className="phoneNumber2">Telefone: <input type="number" id="phoneNumber2" placeholder="Telefone" value={phoneNumber2} onChange={(e) => { setPhonenNumber2(e.target.value) }}></input></div>
                        <div className="phoneNumber3">Telefone: <input type="number" id="phoneNumber3" placeholder="Telefone" value={phoneNumber3} onChange={(e) => { setPhonenNumber3(e.target.value) }}></input></div>
                    </div>

                    <div className="address">
                        <div className="cep">CEP: <input type="text" id="cep" placeholder="Endereço" value={cep} onChange={(e) => { setCep(e.target.value) }} required></input></div>
                        <div className="street">Rua: <input type="text" id="street" placeholder="Rua" value={street} onChange={(e) => { setStreet(e.target.value) }} required></input></div>
                        <div className="number">Número: <input type="number" id="number" placeholder="number" value={number} onChange={(e) => { setNumber(e.target.value) }} required></input></div><br />
                        <div className="neighborhood">Bairro: <input type="text" id="neighborhood" placeholder="Bairro" value={neighborhood} onChange={(e) => { setNeighborhood(e.target.value) }} required></input></div>
                        <div className="city">Cidade: <input type="text" id="city" placeholder="Cidade" value={city} onChange={(e) => { setCity(e.target.value) }} required></input></div>
                        <div className="state">Estado: <select name="languages" id="state" value={state} onChange={(e) => setState(e.target.value)}>
                            <option value="">UF</option>
                            <option value="AC">AC</option>
                            '<option value="AL">AL</option>',
                            '<option value="AP">AP</option>',
                            '<option value="AM">AM</option>',
                            '<option value="BA">BA</option>',
                            '<option value="CE">CE</option>',
                            '<option value="DF">DF</option>',
                            '<option value="ES">ES</option>',
                            '<option value="GO">GO</option>',
                            '<option value="MA">MA</option>',
                            '<option value="MT">MT</option>',
                            '<option value="MS">MS</option>',
                            '<option value="MG">MG</option>',
                            '<option value="PA">PA</option>',
                            '<option value="PB">PB</option>',
                            '<option value="PR">PR</option>',
                            '<option value="PE">PE</option>',
                            '<option value="PI">PI</option>',
                            '<option value="RJ">RJ</option>',
                            '<option value="RN">RN</option>',
                            '<option value="RS">RS</option>',
                            '<option value="RO">RO</option>',
                            '<option value="RR">RR</option>',
                            '<option value="SC">SC</option>',
                            '<option value="SP">SP</option>',
                            '<option value="SE">SE</option>',
                            '<option value="TO">TO</option>
                        </select></div>
                    </div>

                    <div className="healthcare">
                        <h1>Plano de saúde: </h1>
                        <div className="plan">Plano de Saúde: <input type="text" id="plan" placeholder="Plano de saúde" value={plan} onChange={(e) => { setPlan(e.target.value) }}></input></div>
                        <div className="planNumber">Número da carteirinha do plano: <input type="text" id="planNumber" placeholder="Número da carteirinha do plano" value={planNumber} onChange={(e) => { setPlanNumber(e.target.value) }}></input></div>
                    </div>

                    {session.loginType === "admin" ?
                        <div className="crm-coren">
                            <div className="crm">CRM (médicos): <input type="text" id="crm" placeholder="CRM (médicos)" value={crm} onChange={(e) => { setCrm(e.target.value) }}></input></div>
                            <div className="coren">COREN (enfermeiros): <input type="text" id="coren" placeholder="COREN (enfermeiros)" value={coren} onChange={(e) => { setCoren(e.target.value) }}></input></div>
                        </div> :
                        <></>}

                    {session.loginType === "admin" ?
                        <div className="loginType">
                            <select name="languages" id="loginType" value={loginType} onChange={(e) => setLoginType(e.target.value)}>
                                <option value="">logintype</option>
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                                <option value="recepcionist">Recepcionist</option>
                                <option value="patient">Patient</option>
                            </select>
                        </div> :
                        <></>}

                    <ButtonWrapper><Button>Atualizar cadastro</Button></ButtonWrapper>
                </Form>
            </OutterFieldset>

            <ButtonWrapper>
                <ResetPasswordButton onClick={() => { handleResetPassword() }}>
                    <Key />
                    Redefinir Senha
                </ResetPasswordButton>
            </ButtonWrapper>
        </>
    );
}

const Form = styled.form`
    .name, .socialName {
        display: flex;
        justify-content: space-between;
        margin: 0px 0px 4px 0px;

        input[type=text] {
        width: 80%;
    }
    }

    .gender {
        margin: 4px 0px 8px 0px;
    }

    .birthday {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 0px 8px 0px;
    }

    .day {
        margin: 0px 24px 0px 0px;
    }

    .month {
        margin: 0px 24px 0px 0px;
    }

    .CPF-Email-SUS {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0px 0px 8px 0px;
    }

    .cpf input {
        width: 300px;
    }

    .email input {
        width: 300px;
    }

    .susNumber input {
        width: 300px;
    }

    .phoneNumbers {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0px 0px 8px 0px;
    }

    .phoneNumber1 {
        margin: 0px 0px 4px 0px;
    }

    .phoneNumber2 {
        margin: 0px 0px 4px 0px;
    }

    .phoneNumber3 {
        margin: 0px 0px 4px 0px;
    }

    .crm-coren {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 0px 8px 0px;
    }

    .crm {
        margin: 0px 69px 0px 0px;
    }

    .address {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0px 0px 8px 0px;
    }

    .healthcare {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 0px 8px 0px;
    }

    .plan {
        margin: 0px 69px 0px 0px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`

`;

const Key = styled(ImKey)`
    color: #000000;
    transform: scale(1.5);
    margin: 0px 0px 8px 0px;
`;