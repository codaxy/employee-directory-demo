import {HtmlElement} from 'cx/ui/HtmlElement';
import {ContentPlaceholder} from 'cx/ui/layout/ContentPlaceholder';
import {Overlay} from 'cx/ui/overlay/Overlay';
import {History} from 'cx/app/History';

import "./icons";

export const OverlayLayout = <cx>
    <Overlay
        backdrop
        class={{
            "b-overlay": true,
            "s-loading": { expr: "{$page.info.status}=='loading'"}
        }}
        onBackdropClick={() => {
            History.pushState({}, null, '~/');
        }}
    >
        <ContentPlaceholder name="header"/>
        <ContentPlaceholder/>
    </Overlay>
</cx>


