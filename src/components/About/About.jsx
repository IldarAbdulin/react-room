import './About.css';
import rectangle from './aboutImg/rectangle.svg';
import costEffect from './aboutImg/itemImg/cost-effect.svg';
import timeSaving from './aboutImg/itemImg/time-saving.svg';
import flexible from './aboutImg/itemImg/flexible.svg';


function About() {
    return(
        <div className='about'>
            <div className='about-slider'>
                <img src={rectangle} alt="image" />
            </div>
            <div className='about-title'>
                <h2>Our simple and seamless modular products allow teams to shape and then reshape their work environment with ease.</h2>
                <p>GET IN TOUCH</p>
            </div>
            <div className='about__items'>

                <div className='about__item'>
                    <img src={costEffect} alt="cost-effect" />
                    <h3>Cost-effective</h3>
                    <p>At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.</p>
                </div>

                <div className='about__item'>
                    <img src={timeSaving} alt="cost-effect" />
                    <h3>Time Saving</h3>
                    <p>Thoughtful design ensures simple installation in a few hours or less. And, because our products are safety ensured, you'll never have to spend time or money chasing after permits, contractors, and more.</p>
                </div>

                <div className='about__item'>
                    <img src={flexible} alt="cost-effect" />
                    <h3>Flexible</h3>
                    <p>Unlike traditional construction, our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office, or to an entirely new location.</p>
                </div>

            </div>
        </div>
    )
}
export default About