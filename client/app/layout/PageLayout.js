import { HtmlElement } from 'cx/widgets';
import { ContentPlaceholder } from 'cx/ui';

export const PageLayout = <cx>
    <div class="b-page">
        <ContentPlaceholder name="header"/>
        <ContentPlaceholder/>
    </div>
</cx>

