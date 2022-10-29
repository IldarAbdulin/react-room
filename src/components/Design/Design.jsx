import './Design.css'
import mainImg from './DesignImg/mainImg.svg'

function Design() {
    return(
        <div className='design'>

            <div className='img-block'>
                <img src={mainImg} alt='image'/>  
            </div>

            <div className='about-design'>
                <div className='design__big-text'>
                    <h1>Design that inspires a better way to work.</h1>
                </div>
                <div className='design__small-text'>
                    <p>We've developed a series of purpose-built rooms that offer companies looking for change an affordable, sustainable, and flexible alternative to fixed construction and traditional office design.</p>
                </div>
            </div>

        </div>
    )
}
export default Design