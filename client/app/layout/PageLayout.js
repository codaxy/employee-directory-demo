import {HtmlElement} from 'cx/ui/HtmlElement';
import {ContentPlaceholder} from 'cx/ui/layout/ContentPlaceholder';

export const PageLayout = <cx>
    <div class="b-page">
        <ContentPlaceholder name="header"/>
        <ContentPlaceholder/>
    </div>
</cx>

