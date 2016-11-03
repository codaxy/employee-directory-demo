import {Route} from 'cx/ui/nav/Route';
import {HtmlElement} from 'cx/ui/HtmlElement';
import {PureContainer} from 'cx/ui/PureContainer';
import {FirstVisibleChildLayout} from 'cx/ui/layout/FirstVisibleChildLayout';

import AppLayout from '../layout';

import Default from './default';
import About from './about';
import Employee from './emp';


export default <cx>
    <PureContainer outerLayout={AppLayout} layout={FirstVisibleChildLayout}>
        <Route route="~/about" url:bind="url">
            <About/>
        </Route>

        <Route route="~/emp/:id" url:bind="url" visible:expr="window.innerWidth < 1000">
            <Employee />
        </Route>

        <Route route="~/(*splat)" url:bind="url">
            <Default/>
        </Route>
    </PureContainer>
</cx>

