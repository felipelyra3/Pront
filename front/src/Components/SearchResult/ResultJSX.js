import styled from "styled-components";
import { OutterFieldset, InnerFieldset } from "../../Styles/GlobalStyles";
import { GrNotes } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { GiHealthNormal } from 'react-icons/gi';
import { TbVaccine } from 'react-icons/tb';
import { GoAlert } from 'react-icons/go';
import { GiChemicalDrop } from 'react-icons/gi';

export default function ResultJSX({ name, socialName, gender, newBirthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, vaccines, allergies, exams }) {
    if (vaccines) {
        for (let i = 0; i < vaccines.length; i++) {
            const newDate = new Date(vaccines[i].date);
            vaccines[i].newDate = ('0' + newDate.getDate()).slice(-2) + '/'
                + ('0' + (newDate.getMonth() + 1)).slice(-2) + '/'
                + newDate.getFullYear();
        }
    }

    return (
        <>
            <OutterFieldset>
                <legend><div className="legend">Informações do paciente <Notes /></div></legend>

                <InnerFieldset>
                    <legend><div className="legend">Informações pessoais <FillPersonFill /></div></legend>
                    {name ?
                        <p>Nome completo: {name}</p> :
                        <></>}

                    {socialName ?
                        <p>Nome social: {socialName}</p> :
                        <></>}

                    {gender ?
                        <p>Gênero: {gender}</p> :
                        <></>}

                    {newBirthday ?
                        <p>Data de nascimento: {newBirthday} (dia/mês/ano)</p> :
                        <></>}

                    {cpf ?
                        <p>CPF: {cpf}</p> :
                        <></>}

                    {email ?
                        <p>E-mail: {email}</p> :
                        <></>}

                    {susNumber ?
                        <p>Carteirinha do SUS: {susNumber}</p> :
                        <></>}

                    {phoneNumbers ?
                        <p>Telefones: {phoneNumbers.map((number, key) => (<ul><li>-{number}</li></ul>))}</p> :
                        <></>}

                </InnerFieldset>

                <InnerFieldset>
                    <legend><div className="legend">Endereço <Location2 /></div></legend>
                    {address ?
                        <>
                            <ul>
                                <li>Rua: {address.street}</li>
                                <li>Número: {address.number}</li>
                                <li>Bairro: {address.neighborhood}</li>
                                <li>CEP: {address.cep}</li>
                                <li>Cidade: {address.city}</li>
                                <li>Estado (UF): {address.state}</li>
                            </ul>
                        </> :
                        <></>}
                </InnerFieldset>

                <InnerFieldset>
                    <legend><div className="legend">Outros <HealthNormal /></div></legend>
                    {loginType ?
                        <p>Tipo de usuário: {loginType}</p> :
                        <></>}

                    {healthCare ?
                        <>
                            <h1>Plano de saúde: </h1>
                            <ul>
                                <li>Plano: {healthCare.plan}</li>
                                <li>Número da carteirinha: {healthCare.planNumber}</li>
                            </ul>
                        </> :
                        <></>}

                    {crm ?
                        <p>CRM: {crm}</p> :
                        <></>}

                    {coren ?
                        <p>COREN: {coren}</p> :
                        <></>}
                </InnerFieldset>
            </OutterFieldset>

            <OutterFieldset>
                <legend><div className="legend">Saúde <HealthNormal /></div></legend>

                <InnerFieldset>
                    <legend><div className="legend">Vacinas <Vaccine /></div></legend>
                    {vaccines ?
                        <>
                            <p>{vaccines.map((vaccine, key) => (
                                <>
                                    <ul>
                                        <li>Unidade de Saúde: {vaccine.healthUnit}</li>
                                        <li>CNES: {vaccine.cnes}</li>
                                        <li>Data: {vaccine.newDate}</li>
                                        <li>Lote: {vaccine.batch}</li>
                                        <li>Fabricante: {vaccine.manufacturer}</li>
                                        <li>Vacinador: {vaccine.vaccinator}</li>
                                    </ul>
                                    <br /></>
                            ))}</p>
                        </> :
                        <></>}
                </InnerFieldset>

                <InnerFieldset>
                    <legend><div className="legend">Alergias <Alert /></div></legend>
                    {allergies ?
                        <>
                            <p>{allergies.map((allergy, key) => (<ul><li>-{allergy}</li></ul>))}</p>
                        </> :
                        <></>}
                </InnerFieldset>

                <InnerFieldset>
                    <legend><div className="legend">Exames <ChemicalDrop /></div></legend>
                    {exams ?
                        <>
                            <p>{exams.map((exam, key) => (
                                <>
                                    <ul>
                                        <li>Tipo de exame: {exam.examType}</li>
                                        <li>Local da realização do exame: {exam.place}</li>
                                        {exam.link ? <li>Link para o exame original: <a href={exam.link}>Link</a></li> : <></>}
                                        <li>Resultado do exame: {exam.result}</li>
                                    </ul>
                                    <br /></>
                            ))}</p>
                        </> :
                        <></>}
                </InnerFieldset>
            </OutterFieldset>
        </>
    );
}

const AllPersonalInformationWrapper = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 2px solid rgba(3,152,185,1);
    border-radius: 1em;
    margin: -24px 0px 24px 0px;
    padding: 0 1em 1em;
    //width: fit-content;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: #F8F8F8;
        margin: 26px 0px 12px 0px;
    }
`;

const PersonalInformation = styled.fieldset`
    border: 2px solid rgba(66,178,203,1);
    border-radius: 1em;
    margin: -12px 0px 24px 0px;
    padding:0 1em 1em;
    width: fit-content;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: #F8F8F8;
        margin: 26px 0px 12px 0px;
    }
`;

const AddressInformation = styled.fieldset`
    border: 2px solid rgba(66,178,203,1);
    border-radius: 1em;
    margin: -12px 0px 24px 0px;
    padding:0 1em 1em;
    width: fit-content;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: #F8F8F8;
        margin: 26px 0px 12px 0px;
    }
`;

const OtherInformation = styled.fieldset`
    border: 2px solid rgba(66,178,203,1);
    border-radius: 1em;
    margin: -12px 0px 24px 0px;
    padding:0 1em 1em;
    width: fit-content;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: #F8F8F8;
        margin: 26px 0px 12px 0px;
    }
`;

const VaccinesAllergiesExamsInformation = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 2px solid rgba(3,152,185,1);
    border-radius: 1em;
    margin: -24px 0px 24px 0px;
    padding: 0 1em 1em;
    //width: fit-content;

    .legend {
        transform: translatey(-50%);
        width: max-content;
        background: #F8F8F8;
        margin: 26px 0px 12px 0px;
    }
`;

const VaccinesInformation = styled.fieldset`

`;

const Notes = styled(GrNotes)`
    color: #000000;
    //transform: scale(2);
    //margin: 0px 0px 8px 0px;
`;

const FillPersonFill = styled(BsFillPersonFill)``;

const Location2 = styled(ImLocation2)``;

const HealthNormal = styled(GiHealthNormal)``;

const Vaccine = styled(TbVaccine)``;

const Alert = styled(GoAlert)``;

const ChemicalDrop = styled(GiChemicalDrop)``;