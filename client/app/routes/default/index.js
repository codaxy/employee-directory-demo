import {HtmlElement} from 'cx/ui/HtmlElement';
import {Text} from 'cx/ui/Text';
import {Link} from 'cx/ui/nav/Link';
import {Route} from 'cx/ui/nav/Route';
import {Repeater} from 'cx/ui/Repeater';
import {Overlay} from 'cx/ui/overlay/Overlay';
import {TextField} from 'cx/ui/form/TextField';
import Employee from '../emp/Content';
import Controller from './Controller';

export default <cx>
    <main class="b-page" controller={Controller}>
        <header>
            <i class="fa fa-search" />
            <TextField
                value:bind="search.query"
                placeholder="Search..."
                mod="search"
            />
            <Link href="~/emp/new"><i class="fa fa-plus" /></Link>
        </header>

        <div class="b-list">
            <Repeater records:bind='$page.data' recordName="$person">
                <div class="b-card">
                    <div class="e-card-img">
                        <figure text:expr="{$person.firstName}[0]+{$person.lastName}[0]" />
                        <img visible:expr="!!{$person.pictureUrl}" src:bind="$person.pictureUrl" />
                    </div>

                    <div class="e-card-details">
                        <Link href:tpl="~/emp/{$person.id}">
                            <h3 text:tpl="{$person.firstName} {$person.lastName}" />
                            <p text:tpl="{$person.title}" />
                        </Link>

                        <div>
                            <i class="fa fa-globe" />
                            <Text value:bind="$person.officeName" />
                        </div>

                        <div>
                            <i class="fa fa-phone" />
                            <Text value:bind="$person.mobilePhone" visible:expr="!!{$person.mobilePhone}" />
                            <span class="muted" visible:expr="!{$person.mobilePhone}">Not provided</span>
                        </div>

                        <div>
                            <i class="fa fa-envelope-o" />
                            <Text value:bind="$person.primaryEmail" visible:expr="!!{$person.primaryEmail}" />
                            <span class="muted" visible:expr="!{$person.primaryEmail}">Not provided</span>
                        </div>
                    </div>
                </div>
            </Repeater>
        </div>
    </main>

    <Route route="~/emp/:id" url:bind="url">
        <Overlay
            class={{
                "b-empov": true,
                "s-loading": { expr: "{$page.info.status}=='loading'"}
            }}
            backdrop
        >
            <Employee />
        </Overlay>
    </Route>
</cx>
