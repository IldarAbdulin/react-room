import './Header.css'
import logoImg from './headerImg/logo.svg'
import locationImg from './headerImg/location.svg'
import cartImg from './headerImg/cart.svg'

function Header() {
    return(
        <div className='header'>

            <div className='header__logo'>
                <img  src={logoImg} width={50} height={50} alt='Logo'/>
            </div>

            <div className='header__nav'>
                <nav>
                    <li>Products</li>
                    <li>Explore</li>
                    <li>Shop</li>
                </nav>
            </div>

            <div className='header__contact'>
                <div className='contact-location'>
                    <img src={locationImg} width={20} height={24} alt='Location'/>
                    <span>Showrooms</span>
                </div>
                <div className='contact-cart'>
                    <img src={cartImg} width={25} height={25} alt="Cart" />
                </div>
            </div>
        </div>
    );
}
export default Header