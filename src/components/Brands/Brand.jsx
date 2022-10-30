import './Brand.css'
import nike from './brandImg/nike.svg';
import nasa from './brandImg/nasa.svg';
import google from './brandImg/google.svg';
import uber from './brandImg/uber.svg';
import walmart from './brandImg/walmart.svg';
import salesforce from './brandImg/salesforce.svg';
import hulu from './brandImg/hulu.svg';
import reddit from './brandImg/reddit.svg';
import knotel from './brandImg/knotel.svg';
import samsung from './brandImg/samsung.svg';
import amazon from './brandImg/amazon.svg';
import angellist from './brandImg/angellist.svg';
import buzzfeed from './brandImg/buzzfeed.svg';
import apple from './brandImg/apple.svg';
import harrys from './brandImg/harrys.svg';
import asana from './brandImg/asana.svg';
import morgan from './brandImg/morgan.svg';
import greenpeace from './brandImg/greenpeace.svg';

function Brand() {
    return(
        <div className='brand'>
            <h2>The world's leading brands choose ROOM.</h2>
            <p>Over 3,000 and counting.</p>
            <div className='brand__items'>
                <div className='brand__images'>
                    <img src={nike}  alt="nike" />
                    <img src={nasa}  alt="nike" />
                    <img src={google}  alt="nike" />
                    <img src={uber}  alt="nike" />
                    <img src={walmart}  alt="nike" />
                    <img src={salesforce}  alt="nike" />
                    <img src={hulu}  alt="nike" />
                    <img src={reddit}  alt="nike" />
                    <img src={knotel}  alt="nike" />
                    <img src={samsung}  alt="nike" />
                    <img src={amazon}  alt="nike" />
                    <img src={angellist}  alt="nike" />
                    <img src={buzzfeed}  alt="nike" />
                    <img src={apple}  alt="nike" />
                    <img src={harrys}  alt="nike" />
                    <img src={asana}  alt="nike" />
                    <img src={morgan}  alt="nike" />
                    <img src={greenpeace}  alt="nike" />
                </div>
            </div>
        </div>
    )
}
export default Brand