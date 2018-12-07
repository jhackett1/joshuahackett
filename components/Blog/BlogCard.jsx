import vagueTime from 'vague-time'

export default ({
    post
}) => 
    <a href={post.link[0]} target="blank" className="blog-card">
        <article className="blog-card__article">
            <p className="blog-card__published">{vagueTime.get({to: new Date(post.pubDate[0])})}</p>
            <h3 className="blog-card__title">{post.title[0]}</h3>
            <p className="blog-card__excerpt">{post["content:encoded"][0].replace(/(<([^>]+)>)/ig,"").split(".")[0]}.</p>
            <span className="blog-card__cta">Keep reading →</span>
        </article>
    </a>