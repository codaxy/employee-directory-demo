import {HtmlElement} from 'cx/ui/HtmlElement';
import {Link} from 'cx/ui/nav/Link';
import {Repeater} from 'cx/ui/Repeater';
import {TextField} from 'cx/ui/form/TextField';

const data = [{
    picture: 'https://static.pexels.com/photos/35537/child-children-girl-happy-large.jpg',
    firstName: 'Baby',
    lastName: 'Coder',
    title: 'Junior developer for life :)',
}, {
    picture: 'https://static.pexels.com/photos/27411/pexels-photo-27411-large.jpg',
    firstName: 'Babe',
    lastName: 'Blonde',
    title: 'Social Marketing Expert',
}, {
    picture: 'https://static.pexels.com/photos/21273/pexels-photo-large.jpg',
    firstName: 'Upper',
    lastName: 'Class',
    title: 'CMO',
}, {
    picture: 'https://static.pexels.com/photos/119705/pexels-photo-119705-large.jpeg',
    firstName: 'Eye',
    lastName: 'Person',
    title: 'Social Media',
}, {
    picture: 'https://static.pexels.com/photos/26939/pexels-photo-26939-medium.jpg',
    firstName: 'Jeans',
    lastName: 'Guy',
    title: 'Web Artist',
}, {
    picture: 'https://static.pexels.com/photos/101584/pexels-photo-101584-medium.jpeg',
    firstName: 'Vivid',
    lastName: 'Stripes',
    title: 'Web Developer',
}, {
    picture: 'https://static.pexels.com/photos/108048/pexels-photo-108048-medium.jpeg',
    firstName: 'Life\'s',
    lastName: 'Good',
    title: 'Board Member',
}, {
    picture: 'https://static.pexels.com/photos/61100/pexels-photo-61100-medium.jpeg',
    firstName: 'Distance',
    lastName: 'Looks',
    title: 'Personal Assistant',
}];

const moreData = [...data, ...data, ...data, ...data];


export default <cx>
    <main class="b-page">
        <header>
            <TextField placeholder="Search for a colleague" mod="search" />
        </header>

        <div class="b-list">
            <Repeater records={moreData} recordName="$person">
                <div class="b-card">
                    <div class="e-card-img">
                        <img src:bind="$person.picture" alt="Person" />
                    </div>

                    <div class="e-card-details">
                        <Link href:tpl="~/person/{$person.id}">
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
</cx>
