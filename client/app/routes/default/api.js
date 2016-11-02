import {apiGet, apiPatch, apiPut} from 'app/api';

const data = [{
    id: 1,
    picture: 'https://static.pexels.com/photos/35537/child-children-girl-happy-large.jpg',
    firstName: 'Baby',
    lastName: 'Coder',
    title: 'Junior developer for life :)',
}, {
    id: 2,
    picture: 'https://static.pexels.com/photos/27411/pexels-photo-27411-large.jpg',
    firstName: 'Babe',
    lastName: 'Blonde',
    title: 'Social Marketing Expert',
}, {
    id: 3,
    picture: 'https://static.pexels.com/photos/21273/pexels-photo-large.jpg',
    firstName: 'Upper',
    lastName: 'Class',
    title: 'CMO',
}, {
    id: 4,
    picture: 'https://static.pexels.com/photos/119705/pexels-photo-119705-large.jpeg',
    firstName: 'Eye',
    lastName: 'Person',
    title: 'Social Media',
}, {
    id: 5,
    picture: 'https://static.pexels.com/photos/26939/pexels-photo-26939-medium.jpg',
    firstName: 'Jeans',
    lastName: 'Guy',
    title: 'Web Artist',
}, {
    id: 6,
    picture: 'https://static.pexels.com/photos/101584/pexels-photo-101584-medium.jpeg',
    firstName: 'Vivid',
    lastName: 'Stripes',
    title: 'Web Developer',
}, {
    id: 7,
    picture: 'https://static.pexels.com/photos/108048/pexels-photo-108048-medium.jpeg',
    firstName: 'Life\'s',
    lastName: 'Good',
    title: 'Board Member',
}, {
    id: 8,
    picture: 'https://static.pexels.com/photos/61100/pexels-photo-61100-medium.jpeg',
    firstName: 'Distance',
    lastName: 'Looks',
    title: 'Personal Assistant',
}];

const moreData = [...data, ...data, ...data, ...data];

export function query() {
    return apiGet('employees');
}

export function queryDepartments(q) {
    return apiGet('departments', {
        q: q
    });
}

export function get(id) {
    return apiGet(`employees/${id}`);
}

export function patch(id, data) {
    return apiPatch(`employees/${id}`, data);
}

export function put(data) {
    return apiPut(`employees`, data);
}

