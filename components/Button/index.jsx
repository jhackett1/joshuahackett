import ScrollAnimation from 'react-animate-on-scroll'
import './style.sass'

export default ({
    outline,
    blank,
    label,
    href
}) =>
    <ScrollAnimation animateIn="pulse" animateOnce={true} initiallyVisible={true} duration={0.5} className="button-container">
        <a target={(blank)? "blank" : ""} className={(outline)? "button button--outline" : "button button--solid"} href={href}>{label}</a>
    </ScrollAnimation>