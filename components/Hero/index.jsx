import { Link as ScrollLink } from 'react-scroll'

import './style.sass'

export default () =>
    <header className="hero">
        <div className="hero__inner container">
            <img className="hero__logo" src="/static/logo.svg" alt="Joshua Hackett logo"/>
            <h1 className="hero__headline">I'm <strong>Joshua Hackett</strong> and I'm an experience designer.</h1>
            <nav className="menu" role="navigation">
                <ul className="menu__list">
                    <li className="menu__item"><ScrollLink to="work" smooth={true} duration={500} href="#work" className="menu__link">Work</ScrollLink></li>
                    <li className="menu__item"><ScrollLink to="blog" smooth={true} duration={500} href="#blog" className="menu__link">Blog</ScrollLink></li>
                    <li className="menu__item"><ScrollLink to="contact" smooth={true} duration={500} href="#contact" className="menu__link">Contact</ScrollLink></li>
                </ul>
            </nav>
        </div>
    </header>