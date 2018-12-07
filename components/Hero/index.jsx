import './style.sass'

export default () =>
    <header className="hero">
        <div className="hero__inner container">
            <img className="hero__logo" src="/static/logo.svg" alt="Joshua Hackett logo"/>
            <h1 className="hero__headline">I'm <strong>Joshua Hackett</strong> and I'm an experience designer.</h1>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item"><a href="#work" className="menu__link">Work</a></li>
                    <li className="menu__item"><a href="#blog" className="menu__link">Blog</a></li>
                    <li className="menu__item"><a href="#contact" className="menu__link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>