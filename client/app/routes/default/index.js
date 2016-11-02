import {HtmlElement} from 'cx/ui/HtmlElement';
import {Link} from 'cx/ui/nav/Link';
import {Route} from 'cx/ui/nav/Route';
import {Repeater} from 'cx/ui/Repeater';
import {TextField} from 'cx/ui/form/TextField';
import Employee from './emp';
import Controller from './Controller';

export default <cx>
    <main class="b-page" controller={Controller}>
        <header>
            <TextField placeholder="Search for a colleague" mod="search" />
            <Link href="~/emp/new"><i class="fa fa-plus" /></Link>
        </header>

        <div class="b-list">
            <Repeater records:bind='$page.data' recordName="$person">
                <div class="b-card">
                    <div class="e-card-img">
                        <img src:bind="$person.pictureUrl" alt="Person" />
                    </div>

                    <div class="e-card-details">
                        <Link href:tpl="~/emp/{$person.id}">
                            <h3 text:tpl="{$person.firstName} {$person.lastName}" />
                            <p text:tpl="{$person.title}" />
                        </Link>

                        <div>
                            <i class="fa fa-globe" /> Amsterdam
                        </div>

                        <div>
                            <i class="fa fa-mobile" /> 065 065 065
                        </div>

                        <div>
                            <i class="fa fa-envelope-o" /> someone@example.com
                        </div>
                    </div>
                </div>
            </Repeater>
        </div>
    </main>

    <Route route="~/emp/:id" url:bind="url">
        <Employee />
    </Route>
</cx>
