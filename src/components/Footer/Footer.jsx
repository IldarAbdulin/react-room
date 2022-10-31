import './Footer.css';
import logo from './img/logo.svg';
import facebook from './img/facebook.svg';
import insta from './img/insta.svg';
import inbox from './img/innox.svg';
import q from './img/q.svg';

function Footer() {
    return(
        <div className='footer'>

            <div className="footer__logo">
                <img src={logo} width={87} height={87} alt="logo" />
            </div>

            <div className='footer__contact-list'>
                <nav>   
                    <ul>
                        <li>About</li>
                        <li>Compare</li>
                        <li>Reviews</li>
                        <li>Risk-Free Trial</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Podcast</li>
                        <li>Blog</li>
                    </ul>
                </nav>
                <nav>   
                    <ul>
                        <li>Showrooms</li>
                        <li>New York</li>
                        <li>London</li>
                        <li>San Francisco</li>
                        <li>Paris</li>
                        <li>Copenhagen</li>
                        <li>Zürich</li>
                        <li>Los Angeles</li>
                        <li>Berlin</li>
                        <li>Belgium</li>
                        <li>Virtual Demo</li>
                    </ul>
                </nav>
            </div>

            <div className='footer__contact-list'>
                <nav>   
                    <ul>
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Booth Assembly</li>
                        <li>Delivery</li>
                        <li>Room Service</li>
                        <li>Warranty</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Copyright</li>
                    </ul>
                </nav>
                <nav>   
                    <ul>
                        <li>Office</li>
                        <li>599 Broadway, FL 9 <br/> New York, NY 10012</li>
                    </ul>
                </nav>
            </div>

            <div className='footer__social-networks'>
                <li>Follow us</li>
                <div className='footer__social-img'>
                    <img src={facebook} width={20} height={20} alt="facebook"/>
                    <img src={insta} width={20} height={20} alt="instagram"/>
                    <img src={inbox} width={20} height={20} alt="inbox"/>
                    <img src={q} width={20} height={20} alt="q"/>
                </div>
            </div>

            <div className='footer__join'>
                <p>Join our mailing list</p>
                <p>Be the first to hear everything about ROOM.</p>
                <input type="text" id='join-input'/>
                <br />
                <select name="country" id="country">
                    <option value="USA" selected>United States</option>
                    <option value="KG">Kyrgyzstan</option>
                </select>
                <div className='footer__sign-up'>
                    <input type="checkbox" id="check"/>
                    <div>
                    <p>Yes. I would like to receive marketing</p>
                    <p>communications from ROOM about product</p>
                    <p>updates and special offers. Please refer to</p>
                    <p>ROOM’s Privacy Policy for more information</p>
                    <p>about how we process your data (including</p>
                    <p>how to unsubscribe).</p>
                    </div>
                </div>
                <button>Sign Up</button>
            </div>

            <div className='footer__rotate-text'>
                <p>Return to the top</p>
            </div>

        </div>
    )
}
export default Footer