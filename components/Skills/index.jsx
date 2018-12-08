import Skill from './Skill'

import './style.sass'

export default () =>
    <section className="skills">
        <div className="skills__inner container">
            <Skill
                icon="/static/skill1.svg"
                headline="User-centred design"
                content="I design interfaces that respect each user’s circumstances and social needs. User research is a vital part of my process—testing prototypes with real people and continuously improving them."
                />
            <Skill
                icon="/static/skill3.svg"
                headline="Front end development"
                content="I write robust, accessible front-end code and have experience with most modern web frameworks. I can be a designer and developer all-in-one, if need be."
                />            
            <Skill
                icon="/static/skill4.svg"
                headline="Facilitator"
                content="I’ve helped students, apprentices, civil servants and volunteers gain new digital skills through workshops, courses and coaching, and I’m comfortable running co-design sessions with stakeholders."
                />
            <Skill
                icon="/static/skill2.svg"
                headline="Agile delivery"
                content="I work incrementally, delivering the most valuble things early and often, rather than waiting until the end of the project. This lets me continuously incorporate user and stakeholder feedback, reducing risk."
                />
        </div>
    </section>
