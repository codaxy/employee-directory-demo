import {Route} from 'cx/ui/nav/Route';
import {HtmlElement} from 'cx/ui/HtmlElement';
import {PureContainer} from 'cx/ui/PureContainer';

import AppLayout from '../layout';

import Default from './default';
import About from './about';


export default <cx>
    <PureContainer outerLayout={AppLayout}>
        <Route route="~/about" url:bind="url">
            <About/>
        </Route>
        <Route route="~/(*splat)" url:bind="url">
            <Default/>
        </Route>
    </PureContainer>
</cx>

