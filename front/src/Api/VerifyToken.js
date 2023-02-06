import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkTokenApi } from "./LoginApi";

export default function VerifyToken() {
    const navigate = useNavigate();

    const session = JSON.parse(localStorage.getItem('session'));

    useEffect(() => {
        if (session) {
            const body = {};
            const config = {
                headers: {
                    Authorization: `Bearer ${session.token}`,
                    logintype: session.loginType
                }
            };

            const post = checkTokenApi(body, config);

            post.then(() => {
                navigate('/homepage');
            });
        }
    }, []);

}