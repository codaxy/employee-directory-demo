import { Controller } from 'cx/ui';
import {queryEmployees} from 'app/api/index'

export default class extends Controller {
    init() {
        this.store.init('list.loading', true);
        this.addTrigger('load', ['search.query', 'list.version'], ::this.load, true);
    }

    load() {
        var q = this.store.get('search.query');
        var options = {
            q: q || ''
        };
        queryEmployees(options)
            .then(data=> {
                this.store.set('list.data', data);
                this.store.set('list.loading', false);
            })
    }
}
