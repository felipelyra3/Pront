import api from "./Api";

export async function loginApi(body, config) {
    const response = await api.post('/login', body, config);
    return response.data;
}

export async function checkTokenApi(body, config) {
    const response = await api.post('/login/checktoken', body, config);
    return response.data;
}

export async function deleteSessionApi(config) {
    const response = await api.delete('/login/deletesession', config);
    return response.data;
}