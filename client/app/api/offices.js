import {GET} from './util/methods';

export function queryOffices(q) {
    return GET('offices', q);
}


