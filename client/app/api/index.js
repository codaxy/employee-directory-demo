import {apiGet, apiPatch, apiPut} from 'app/api/methods';

export function queryEmployees(q) {
    return apiGet('employees', q);
}

export function queryDepartments(q) {
    return apiGet('departments', q);
}

export function queryOffices(q) {
    return apiGet('offices', q);
}

export function getEmployee(id) {
    return apiGet(`employees/${id}`);
}

export function patchEmployee(id, data) {
    return apiPatch(`employees/${id}`, data);
}

export function putEmployee(data) {
    return apiPut(`employees`, data);
}

