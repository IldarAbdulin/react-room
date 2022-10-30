import './Reviews.css'
import star from './img/star.svg'
import google from './img/google.svg'
import wayfair from './img/wayfair.svg'
import flexport from './img/flexport.svg'

function Reviews() {
    return(
        <div className='reviews'>
            <div className='reviews-items'>

                <div className='reviews-item'>
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <p>“We can now have meetings in peace.”</p>
                    <img className='revImgForMargin' src={google} alt="google" />
                </div>

                <div className='reviews-item'>
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <p>“Amazing private space to get work done.”</p>
                    <img className='revImgForMargin' src={wayfair} alt="google" />
                </div>

                <div className='reviews-item'>
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <img src={star} width={20} height={20} alt="star" />
                    <p>“Our booths are in constant use.”</p>
                    <img className='revImgForMargin' src={flexport} alt="google" />
                </div>

                <p className='more-reviews'>READ MORE REVIEWS</p>

            </div>
        </div>
    )
}
export default Reviews