import './style.sass'

export default () =>
    <footer className="site-footer">
        <div className="container">
            <ul className="social-menu">
                <li className="social-menu__item"><a className="social-menu__link" target="blank" href="http://github.com/jhackett1"><img src="/static/github.svg" alt="Github logo"/></a></li>
                <li className="social-menu__item"><a className="social-menu__link" target="blank" href="http://twitter.com/dinosaurenby"><img src="/static/twitter.svg" alt="Twitter logo"/></a></li>
                <li className="social-menu__item"><a className="social-menu__link" target="blank" href="https://www.linkedin.com/in/hackettjoshua/"><img src="/static/linkedin.svg" alt="Linkedin logo"/></a></li>
            </ul>
            <p aria-role="contentinfo" className="site-footer__copyright">© Joshua Hackett 2018. All rights reserved unless otherwise noted.</p>
        </div>
    </footer>