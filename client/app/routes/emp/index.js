import {HtmlElement} from 'cx/ui/HtmlElement';
import Content from './Content';

export default <cx>
    <Content class={{
        "b-page": true,
        "m-emp": true,
        "s-loading": { expr: "{$page.info.status}=='loading'"}
    }} />
</cx>
