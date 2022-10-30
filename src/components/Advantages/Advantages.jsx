import './Advantages.css'
import firstImg from './advantagesImg/1.svg'
import secondImg from './advantagesImg/2.svg'
import thirdImg from './advantagesImg/3.svg'

function Advatages() {
    return(
        <div className='advantages'>

            <div className="advantages__item">
                <div className='img-item'>
                    <img src={firstImg} width={670} height={670} alt="image" />
                </div>
                <div className='text-item'>
                    <h3>We sell direct.</h3>
                    <p>We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction required.</p>
                </div>
            </div>

            <div className="advantages__item">
                <div className='text-item'>
                    <h3>We build with purpose.</h3>
                    <p>We’re not just building another room with four walls, we’re building a more productive workspace. We design with you in mind, looking at every detail as an opportunity to enable a better working environment for everyone.</p>
                </div>
                <div className='img-item'>
                    <img src={secondImg} width={670} height={670} alt="image" />
                </div>
            </div>

            <div className="advantages__item">
                <div className='img-item'>
                    <img src={thirdImg} width={670} height={670} alt="image" />
                </div>
                <div className='text-item'>
                    <h3>We design sustainably.</h3>
                    <p>From design to delivery, we strive to lessen our impact on the environment. Our products are engineered with recycled materials and replace multiple cycles of construction, minimizing noise and our footprint.</p>
                </div>
            </div>

        </div>
    )
}
export default Advatages