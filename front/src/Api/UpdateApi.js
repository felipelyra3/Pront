import api from "./Api";

export async function updateUserByIDApi(body, config) {
    const response = await api.put('/update/user', body, config);
    return response.data;
}

export async function updateUserPasswordByCPF(body, config) {
    const response = await api.put('/update/user/password', body, config);
    return response.data;
}

export async function updateAddNewVaccineApi(body, config) {
    const response = await api.put('/update/vaccine', body, config);
    return response.data;
}

export async function updateAddNewAllergyApi(body, config) {
    const response = await api.put('/update/allergy', body, config);
    return response.data;
}

export async function updateAddNewExamApi(body, config) {
    const response = await api.put('/update/exam', body, config);
    return response.data;
}