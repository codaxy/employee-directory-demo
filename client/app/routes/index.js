import Default from './default';
import {Route} from 'cx/ui/nav/Route';

export default <cx>
    <Route route="~/" url:bind="url">
        <Default/>
    </Route>
</cx>

