
import ScrollAnimation from 'react-animate-on-scroll';
import './style.sass'

export default () =>
    <section className="profile">
        <div className="profile__inner container">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1}>
                <img className="profile__portrait" src="/static/me.jpg" alt="Me!"/> 
            </ScrollAnimation>
            <p className="profile__introduction"><span className="drop-cap">I design</span> and build digital products and services, and I’ve got the skills to shepherd ideas right through that process. <span className="shade">I particularly care about work that provides social good.</span></p>
        </div>
    </section>
