import { Route, HtmlElement, PureContainer, Sandbox } from 'cx/widgets';
import { FirstVisibleChildLayout } from 'cx/ui';

import {PageLayout, OverlayLayout} from '../layout';

import DefaultPage from './default';
import AboutPage from './about';
import EmployeePage from './emp';


export default <cx>
    <Sandbox key:bind="url" storage:bind="pages">
        <div class="b-layout" layout={FirstVisibleChildLayout}>

            {/* use overlays on screens larger than 1000px */}
            <PureContainer visible={()=>window.innerWidth >= 1000}>
                <DefaultPage outerLayout={PageLayout}/>

                <Route route="~/about" url:bind="url">
                    <AboutPage outerLayout={OverlayLayout}/>
                </Route>

                <Route route="~/emp/:id" url:bind="url">
                    <EmployeePage outerLayout={OverlayLayout}/>
                </Route>
            </PureContainer>


            {/* default layout */}
            <PureContainer>
                <Route route="~/about" url:bind="url">
                    <AboutPage/>
                </Route>

                <Route route="~/emp/:id" url:bind="url">
                    <EmployeePage outerLayout={PageLayout}/>
                </Route>

                <Route route="~/" url:bind="url">
                    <DefaultPage outerLayout={PageLayout}/>
                </Route>
            </PureContainer>
        </div>
    </Sandbox>
</cx>

