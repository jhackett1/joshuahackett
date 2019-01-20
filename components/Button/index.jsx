import ScrollAnimation from 'react-animate-on-scroll'
import './style.sass'

export default ({
    outline,
    blank,
    label,
    href
}) =>
    <div className="button-container">
        <a target={(blank)? "blank" : ""} className={(outline)? "button button--outline" : "button button--solid"} href={href}>{label}</a>
    </div>