import api from "./Api";

export async function registerNewUserApi(body, config) {
    const response = await api.post('/registration/newuser', body, config);
    return response.data;
}