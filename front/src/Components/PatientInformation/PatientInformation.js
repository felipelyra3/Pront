import { useLocation } from "react-router-dom";
import DefaultLoggedPage from "../DefaultLoggedPage/DefaultLoggedPage.js";
import ResultJSX from "../SearchResult/ResultJSX.js";

export default function PatientInformation() {
    const location = useLocation();
    const { name, socialName, gender, birthday, cpf, address, email, susNumber, phoneNumbers, healthCare, crm, coren, vaccines, allergies, exams } = location.state;

    const dateBirthday = new Date(birthday);
    const newBirthday = ('0' + dateBirthday.getDate()).slice(-2) + '/'
        + ('0' + (dateBirthday.getMonth() + 1)).slice(-2) + '/'
        + dateBirthday.getFullYear();

    return (
        <DefaultLoggedPage>
            <ResultJSX name={name} socialName={socialName} gender={gender} newBirthday={newBirthday} cpf={cpf} address={address} email={email} susNumber={susNumber} phoneNumbers={phoneNumbers} healthCare={healthCare} crm={crm} coren={coren} vaccines={vaccines} allergies={allergies} exams={exams} />
        </DefaultLoggedPage>
    );
} 