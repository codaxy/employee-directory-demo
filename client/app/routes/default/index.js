import { HtmlElement, Text, Link, Route, Repeater, Overlay, Label } from 'cx/widgets';
import { FirstVisibleChildLayout } from 'cx/ui';
import {SearchField} from './SearchField';
import Controller from './Controller';

export default <cx>
    <main controller={Controller} class="b-list">
        <header putInto="header">
            <SearchField
                value:bind="search.query"
                placeholder="Search..."
                label={{ items: <i class="fa fa-search" /> }}
            />
            <Link href="~/emp/new"><i class="fa fa-plus" /></Link>
            <Link href="~/about"><i class="fa fa-question" /></Link>
        </header>

        <div
            class="b-cards"
            layout={FirstVisibleChildLayout}
        >
            <div
                class="e-cards-empty"
                visible:expr="{list.loading}">
                Loading...
            </div>

            <div
                class="e-cards-empty"
                visible:expr="!{list.data} || {list.data}.length == 0"
            >
                No records found matching the given search criteria.
            </div>

            <Repeater
                records:bind='list.data'
                recordName="$person"
                idField="id"
            >
                <div class="b-card">
                    <div class="e-card-img">
                        <figure
                            text:expr="{$person.firstName}[0]+{$person.lastName}[0]"
                        />
                        <img
                            visible:expr="!!{$person.pictureUrl}"
                            src:bind="$person.pictureUrl"
                        />
                    </div>

                    <div class="e-card-details">
                        <Link href:tpl="~/emp/{$person.id}">
                            <h3 text:tpl="{$person.firstName} {$person.lastName}" />
                            <p text:tpl="{$person.title}" />
                        </Link>

                        <div>
                            <i class="fa fa-globe" />
                            <Text bind="$person.officeName" />
                        </div>

                        <div>
                            <i class="fa fa-phone" />
                            <Text
                                visible:expr="!!{$person.mobilePhone}"
                                bind="$person.mobilePhone"
                            />
                            <span
                                class="muted"
                                visible:expr="!{$person.mobilePhone}"
                            >
                                Not provided
                            </span>
                        </div>

                        <div>
                            <i class="fa fa-envelope-o" />
                            <Text
                                visible:expr="!!{$person.primaryEmail}"
                                bind="$person.primaryEmail"
                            />
                            <span
                                class="muted"
                                visible:expr="!{$person.primaryEmail}"
                            >
                                Not provided
                            </span>
                        </div>
                    </div>
                </div>
            </Repeater>
        </div>
    </main>
</cx>
