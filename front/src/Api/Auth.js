import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkTokenApi } from "./LoginApi";

export default function Auth() {
    const navigate = useNavigate();
    const [valid, setValid] = useState(false);

    const session = JSON.parse(localStorage.getItem('session'));

    useEffect(() => {
        if (!session) {
            setValid(false);
            navigate('/');
        } else {
            const body = {};
            const config = {
                headers: {
                    Authorization: `Bearer ${session.token}`,
                    logintype: session.loginType
                }
            };

            const post = checkTokenApi(body, config);

            post.then(() => {
                setValid(true);
            });

            post.catch(() => {
                setValid(false);
                navigate('/');
            });

        }
    }, []);

    return valid;

}
