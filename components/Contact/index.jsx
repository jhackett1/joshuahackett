import Button from '../Button'

import './style.sass'

export default () =>
    <section className="contact" id="contact">
        <div className="container">
        <h2 className="contact__section-title">Contact me</h2>
        <p className="contact__content">I’m available for freelance experience design and sometimes development work. If you’ve got something that’s a good fit, get in touch.</p>
        <Button
                href="mailto:hello@joshuahackett.com"
                label="Email me"
                />
        <Button
            href="/static/cv.pdf"
            blank
            outline
            label="Download CV"
            />

        </div>
    </section>