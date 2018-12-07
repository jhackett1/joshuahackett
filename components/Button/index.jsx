import './style.sass'

export default ({
    outline,
    blank,
    label,
    href
}) =>
    <a target={(blank)? "blank" : ""} className={(outline)? "button button--outline" : "button button--solid"} href={href}>{label}</a>