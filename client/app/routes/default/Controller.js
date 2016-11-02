import {Controller} from 'cx/ui/Controller';
import {query} from './api'

export default class extends Controller {
    init() {
        this.load();
    }

    load() {
        query()
            .then(data=> {
                this.store.set('$page.data', data);
            })
    }
}
