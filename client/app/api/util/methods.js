import {API} from 'API';
import {urlEncode} from './urlEncode';

function checkOk(r) {
    if (!r.ok)
        throw Error(r.statusText);
    return r;
}

export function doFetch(path, opt) {
    let queryString = '';

    if (opt && typeof opt.query == 'object') {
        queryString = '?' + urlEncode(opt.query);
        delete opt.query;
    }

    let options = {
        ...opt
    };

    //Add auth headers

    return fetch(API.baseUrl + path + queryString, options)
        .then(checkOk)
        .then(x=>x.json())
}

export function GET(url, query) {
    return doFetch(url, { query });
}

export function PATCH(url, data) {
    return doFetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data, null, 2)
    });
}

export function POST(url, data) {
    return doFetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data, null, 2)
    });
}

export function PUT(url, data) {
    return doFetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data, null, 2)
    });
}