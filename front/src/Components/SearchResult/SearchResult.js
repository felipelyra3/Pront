import DefaultLoggedPage from "../DefaultLoggedPage/DefaultLoggedPage";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';
import { TbVaccine } from 'react-icons/tb';
import { GoAlert } from 'react-icons/go';
import { GiChemicalDrop } from 'react-icons/gi';
import { AddButton } from "../../Styles/GlobalStyles";
import ResultJSX from "./ResultJSX";
import EditResultJSX from "./EditResultJSX";
import VaccineJSX from "./VaccineJSX";
import AllergyJSX from "./AllergyJSX";
import ExamJSX from "./ExamsJSX";
import React, { useRef } from 'react';

export default function SearchResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const bottomOfThePage = useRef();

    useEffect(() => {
        if (!location.state) {
            navigate('/homepage');
        }
    });

    const [resultJSX, setResultJSX] = useState(true);
    const [vaccineJSX, setVaccineJSX] = useState(false);
    const [allergyJSX, setAllergyJSX] = useState(false);
    const [examJSX, setExamJSX] = useState(false);
    const { _id, back, name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, vaccines, allergies, exams } = location.state;

    //const obj = location.state;
    //console.log(Object.keys(obj).map((e) => `${e}: ${obj[e]}`));

    const dateBirthday = new Date(birthday);
    const newBirthday = ('0' + dateBirthday.getDate()).slice(-2) + '/'
        + ('0' + (dateBirthday.getMonth() + 1)).slice(-2) + '/'
        + dateBirthday.getFullYear();

    function setAllFalseJSX() {
        setVaccineJSX(false);
        setAllergyJSX(false);
        setExamJSX(false);
    }

    return (
        <DefaultLoggedPage>



            {resultJSX ?
                <ArrowBackWrapper><ArrowBackCircle onClick={() => { navigate(`/${back}`); }} /></ArrowBackWrapper> :
                <ArrowBackWrapper><ArrowBackCircle onClick={() => { setResultJSX(!resultJSX) }} /></ArrowBackWrapper>}

            <ResultPageWrapper >

                <Result>
                    {resultJSX ?
                        <ResultJSX name={name} socialName={socialName} gender={gender} newBirthday={newBirthday} cpf={cpf} address={address} loginType={loginType} email={email} susNumber={susNumber} phoneNumbers={phoneNumbers} healthCare={healthCare} crm={crm} coren={coren} vaccines={vaccines} allergies={allergies} exams={exams} /> :
                        <EditResultJSX _id={_id} back={back} name={name} socialName={socialName} gender={gender} dateBirthday={dateBirthday} cpf={cpf} address={address} loginType={loginType} email={email} susNumber={susNumber} phoneNumbers={phoneNumbers} healthCare={healthCare} crm={crm} coren={coren} vaccines={vaccines} allergies={allergies} exams={exams} />}

                    {/* {Object.keys(obj).map((e) => <p> {`${e}`}: {`${obj[e]}`}</p>)} */}
                </Result>

                {resultJSX ?
                    <>
                        <Buttons>
                            <AddButton onClick={() => { setResultJSX(!resultJSX); setAllFalseJSX(); }}>
                                <UserEdit />
                                Editar usuário
                            </AddButton>

                            <AddButton onClick={() => { setAllFalseJSX(); setVaccineJSX(true); bottomOfThePage.current.scrollIntoView(/* { behavior: 'smooth' } */); }}>
                                <Vaccine />
                                Adicionar Vacina
                            </AddButton>

                            <AddButton onClick={() => { setAllFalseJSX(); setAllergyJSX(true); bottomOfThePage.current.scrollIntoView(); }}>
                                <Alert />
                                Adicionar Alergia
                            </AddButton>

                            <AddButton onClick={() => { setAllFalseJSX(); setExamJSX(true); bottomOfThePage.current.scrollIntoView(); }}>
                                <ChemicalDrop />
                                Adicionar Exame
                            </AddButton>
                        </Buttons>
                    </> :
                    <></>}

                {vaccineJSX ?
                    <VaccineJSX _id={_id} back={back} cpf={cpf} susNumber={susNumber} /> :
                    <></>}

                {allergyJSX ?
                    <AllergyJSX _id={_id} back={back} cpf={cpf} susNumber={susNumber} /> :
                    <></>}

                {examJSX ?
                    <ExamJSX _id={_id} back={back} cpf={cpf} susNumber={susNumber} /> :
                    <></>}

            </ResultPageWrapper>

            <div className="bottomOfThePage" ref={bottomOfThePage}></div>

        </DefaultLoggedPage>
    );
}

const Result = styled.div`
    li {
        margin: 0px 0px 0px 12px;
    }
    .true {
        
    }
    .false{
        display: none;
    }
`;

const ArrowBackWrapper = styled.div`
    position: fixed;
    top: 5px;
    left: 56px;
    height: 60px;
    width: 92%;
    border-radius: 30px;
    background-color: #F8F8F8;
    z-index: 1;
`;

const ArrowBackCircle = styled(IoIosArrowRoundBack)`
    position: fixed;
    top: 24px;
    left: 80px;
    color: #000000;
    transform: scale(3);
    border: 1px solid black;
    border-radius: 100%;
    margin: 4px 60px 60px 4px;
    cursor: pointer;
    :hover {
        color: #0699BA;
        border: 1px solid #0699BA;
        background-color: #F6F6F6;
    }
`;

const ResultPageWrapper = styled.div`
    margin: 50px 0px 0px 0px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Edit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 80px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,119,144,1) 0%, rgba(185,242,255,1) 0%, rgba(255,255,255,1) 100%);
    border: 1px solid rgba(185,242,255,1);
    border-radius: 20px;
    margin: 24px;
`;

const UserEdit = styled(FaUserEdit)`
    color: #000000;
    transform: scale(2);
    margin: 0px 0px 8px 0px;
`;

const Vaccine = styled(TbVaccine)`
    color: #000000;
    transform: scale(2);
    margin: 0px 0px 8px 0px;
`;

const Alert = styled(GoAlert)`
    color: #000000;
    transform: scale(2);
    margin: 0px 0px 8px 0px;
`;

const ChemicalDrop = styled(GiChemicalDrop)`
    color: #000000;
    transform: scale(2);
    margin: 0px 0px 8px 0px;
`;