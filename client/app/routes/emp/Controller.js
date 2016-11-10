import {Controller} from 'cx/ui/Controller';
import {History} from 'cx/app/History';
import {getEmployee, patchEmployee, putEmployee, queryDepartments, queryOffices} from '../../api/index'

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
                data: {}
            });
        }
        else {

            if (id != this.store.get('$page.info.data.id')) {
                this.store.set('$page.info.status', 'loading');
                this.store.set('$page.info.mode', 'view');
            }

            getEmployee(id)
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
            promise = putEmployee(data)
                .then(x=> {
                    this.store.set('$page.info.data', x);
                    History.replaceState({}, null, `~/emp/${x.id}`);
                });
        }
        else {
            promise = patchEmployee(data.id, data);
        }

        this.store.set('$page.info.mode', 'view');

        promise
            .then(()=> {
                this.store.update('list.version', version => (version || 0) + 1);
            })
            .catch(e=> {
                console.log(e);
                this.store.set('$page.info.mode', 'edit');
            });
    }

    cancel(e) {
        e.preventDefault();
        this.store.set('$page.info.mode', 'view');
        this.load(true);
    }

    queryDepartments(q) {
        return queryDepartments({q: q});
    }

    queryOffices(q) {
        return queryOffices({q: q});
    }
}
