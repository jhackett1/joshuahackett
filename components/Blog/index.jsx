import BlogCard from './BlogCard'
import Button from '../Button'

import './style.sass'

export default ({
    mediumPosts
}) =>
    <section className="blog" id="blog">
        <div className="container">
            <h2 className="blog__section-title">Blog</h2>            
            <div className="blog__grid">
                {mediumPosts.map((post, i)=>
                    <BlogCard key={i} post={post} />
                )}
            </div>
            <Button
                href={`https://www.medium.com/@dinosaurlord`}
                blank
                label="Read more"
                />
        </div>
    </section>