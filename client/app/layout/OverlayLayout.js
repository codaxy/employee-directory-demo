import { HtmlElement, Overlay } from 'cx/widgets';
import { ContentPlaceholder, History } from 'cx/ui';





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


