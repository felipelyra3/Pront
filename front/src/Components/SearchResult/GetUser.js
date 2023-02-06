import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FindUserByCPFApi, FindUserBySusNumberApi } from "../../Api/SearchApi.js";

export default function GetUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const session = JSON.parse(localStorage.getItem('session'));
    const { back, cpfSearch, susNumberSearch } = location.state;
    const config = {
        headers: {
            Authorization: `Bearer ${session.token}`,
            logintype: session.loginType
        }
    };

    useEffect(() => {
        if (back === "searchbycpf") {
            const user = FindUserByCPFApi(cpfSearch, config);

            user.then((answer) => {
                answer.back = "searchbycpf";
                navigate('/searchresult', { state: answer });
            });

            user.catch(() => {
                alert("CPF não encontrado");
                navigate(`/${back}`);
                return;
            });
        }

        if (back === "searchbysusnumber") {
            const user = FindUserBySusNumberApi(susNumberSearch, config);

            user.then((answer) => {
                answer.back = "searchbysusnumber";
                navigate('/searchresult', { state: answer });
            });

            user.catch(() => {
                alert("Carteirinha do SUS não encontrada");
                navigate(`/${back}`);
                return;
            });
        }
    }, []);


}