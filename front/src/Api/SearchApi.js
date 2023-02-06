import api from "./Api";

export async function FindUserByCPFApi(cpf, config) {
    const response = await api.get(`/search/cpf/${cpf}`, config);
    return response.data;
}

export async function FindUserBySusNumberApi(susNumber, config) {
    const response = await api.get(`/search/susnumber/${susNumber}`, config);
    return response.data;
}

export async function FindPatientByCPFApi(cpf, config) {
    const response = await api.get(`/search/patient/cpf/${cpf}`, config);
    return response.data;
}