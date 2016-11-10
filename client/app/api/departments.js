import {GET} from './util/methods';

export function queryDepartments(q) {
    return GET('departments', q);
}

