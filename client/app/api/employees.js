import {GET, PATCH, PUT} from './util/methods';

export function queryEmployees(searchQuery) {
    return GET('employees', searchQuery);
}

export function getEmployee(id) {
    return GET(`employees/${id}`);
}

export function patchEmployee(id, data) {
    return PATCH(`employees/${id}`, data);
}

export function putEmployee(data) {
    return PUT(`employees`, data);
}

