export default ({
    post
}) => 
    <a href={post.url} target="blank" className="work-card">
        <img src={post.covers["808"]} alt={post.name} className="work-card__image"/>
        <article className="work-card__article">
            <p className="work-card__field">{post.fields[0]}</p>
            <h3 className="work-card__name">{post.name}</h3>
        </article>
    </a>
