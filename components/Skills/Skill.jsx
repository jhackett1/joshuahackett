export default ({
    icon,
    headline,
    content
}) => 
    <article className="skill">
        <img className="skill__icon" src={icon} alt={headline}/>
        <h3 className="skill__headline">{headline}</h3>
        <p className="skill__content">{content}</p>
    </article>