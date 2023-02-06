import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FindPatientByCPFApi } from "../../Api/SearchApi.js";

export default function GetPatientInformation() {
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));
    const config = {
        headers: {
            Authorization: `Bearer ${session.token}`,
            logintype: session.loginType
        }
    };

    useEffect(() => {
        const user = FindPatientByCPFApi(session.cpf, config);

        user.then((answer) => {
            navigate('/patientinformation', { state: answer });
        });

        user.catch(() => {
            alert("Error!");
            navigate('/homepage');
        });
    }, []);
}