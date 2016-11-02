import {Controller} from 'cx/ui/Controller';
import {History} from 'cx/app/History';
import {get, patch, put, queryDepartments} from '../api'

export default class extends Controller {
    init() {
        this.addTrigger('load', ['$route.id'], ::this.load, true);
    }

    load() {
        var id = this.store.get('$route.id');

        if (id == 'new') {
            this.store.set('$page.info', {
                status: 'ok',
                mode: 'edit',
                data: {
                    firstName: 'New',
                    lastName: 'Entry'
                }
            });
        }
        else {

            if (id != this.store.get('$page.info.data.id')) {
                console.log(id, this.store.get('$page.info.data.id'));
                this.store.set('$page.info.status', 'loading');
                this.store.set('$page.info.mode', 'view');
            }

            get(id)
                .then(data=> {
                    this.store.set('$page.info.data', data);
                    this.store.set('$page.info.status', 'ok');
                })
        }
    }

    edit(e) {
        e.preventDefault();
        this.store.set('$page.info.mode', 'edit');
    }

    save(e) {
        e.preventDefault();
        var data = this.store.get('$page.info.data');
        var id = this.store.get('$route.id');
        var promise;
        if (id == 'new') {
            promise = put(data)
                .then(x=> {
                    History.replaceState({}, null, `~/emp/${x.id}`);
                });
        }
        else {
            promise = patch(data.id, data);
        }

        this.store.set('$page.info.mode', 'view');

        promise
            .catch(e=> {
                console.log(e);
                this.store.set('$page.info.mode', 'edit');
            });
    }

    cancel(e) {
        e.preventDefault();
        this.store.set('$page.info.mode', 'view');
        this.load();
    }

    queryDepartments(q) {
        return queryDepartments(q);
    }
}
