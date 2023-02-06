import axios from "axios";
import { deleteSessionApi } from "./LoginApi";

export default function Logout() {
    const session = JSON.parse(localStorage.getItem('session'));
    const config = {
        headers: {
            Authorization: `Bearer ${session.token}`,
            logintype: session.loginType
        }
    };

    deleteSessionApi(config);
    localStorage.removeItem("session");
}