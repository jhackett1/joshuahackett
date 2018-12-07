import WorkCard from './WorkCard'
import Button from '../Button'

import './style.sass'

export default ({
    behancePosts
}) =>
    <section className="work" id="work">
        <div className="container">
            <h2 className="work__section-title">Work</h2>            
            <div className="work__grid">
                {behancePosts.map((post, i)=>
                    <WorkCard key={i} post={post} />
                )}
            </div>
            <Button
                href="https://www.behance.net/jhackett1"
           
                blank
                label="See more work"
                />
        </div>
    </section>