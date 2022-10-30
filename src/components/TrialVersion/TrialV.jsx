import './TrialV.css'
import shipping from './TrialImg/shipping.svg'
import plugAndPlay from './TrialImg/plugAndPlay.svg'
import returns from './TrialImg/returns.svg'

function TrialV() {
    return(
        <div className='motherOfTrial'>
            <div className='trialV'>
                <h2>100 day risk-free trial</h2>

                <div className='trialV__free'>
                    <div className='free-item'>
                        <img src={shipping} width={64} height={64} alt="shipping" />
                        <p>FREE SHIPPING</p>
                    </div>

                    <div className='free-item'>
                        <img src={plugAndPlay} width={64} height={51} alt="shipping" />
                        <p>PLUG & PLAY</p>
                    </div>

                    <div className='free-item'>
                        <img src={returns} width={64} height={64} alt="shipping" />
                        <p>FREE RETURNS</p>
                    </div>
                </div>
                <div className='green-button'>
                    <button>GET A ROOM</button>
                </div>
                <p className='footerOfTrialV'>Terms & Conditions apply</p>
            </div>
        </div>
    )
}
export default TrialV