import {server} from 'config';

function checkOk(r) {
    if (!r.ok)
        throw Error(r.statusText);
    return r;
}

export function apiFetch(url, opt) {

    var query = '';

    if (opt && typeof opt.query == 'object') {
        query = '?' + Object.keys(opt.query)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(opt.query[k]))
                .join('&');
        delete opt.query;
    }

    let options = {
        ...opt
    };
    return fetch(server.baseUrl + url + query, options)
        .then(checkOk)
        .then(x=>x.json())
}

export function apiGet(url, query) {
    return apiFetch(url, { query });
}

export function apiPatch(url, data) {
    return apiFetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data, null, 2)
    });
}

export function apiPut(url, data) {
    return apiFetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data, null, 2)
    });
}