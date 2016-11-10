import {HtmlElement} from 'cx/ui/HtmlElement';
import {Link} from 'cx/ui/nav/Link';

export default <cx>
    <main class="b-about">
        <header putInto="header">
            <Link href="~/"><i class="fa fa-arrow-left"/></Link>
            <h2>About</h2>
        </header>

        <p>This is a sample application for the <a href="http://cx.codaxy.com">Cx framework.</a></p>

        <p>Source code of the application is available from <a href="https://github.com/codaxy/employee-directory-demo">GitHub</a>.</p>

        <p>Please read the related <a href="http://blog.codaxy.com">blog post series</a> which provide in-depth explanations.</p>

    </main>
</cx>
