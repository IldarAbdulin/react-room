import './Room.css'
import phoneBoots from './roomImg/phone-booth.svg';
import focusRoom from './roomImg/focus-room.svg';
import meetingRoom from './roomImg/meeting-room.svg';
import openMeetingRoom from './roomImg/open-meeting-room.svg';

function Room() {
    return(
        <div className='room'>

            <div className='room__item'>
                <img src={phoneBoots} width={590} height={410} alt="image" />
                <p>Phone Booth</p>
            </div>

            <div className='room__item'>
                <img src={focusRoom} width={590} height={410} alt="image" />
                <p>Focus Room</p>
            </div>

            <div className='room__item'>
                <img src={meetingRoom} width={590} height={410} alt="image" />
                <p>Meeting Room</p>
            </div>

            <div className='room__item'>
                <img src={openMeetingRoom} width={590} height={410} alt="image" />
                <p>Open Meeting Room</p>
            </div>

        </div>
    )
}
export default Room