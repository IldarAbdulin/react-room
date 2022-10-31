import './App.css';
import Header from './components/Header/Header';
import Design from './components/Design/Design';
import Room from './components/Room/Room';
import Brand from './components/Brands/Brand';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Advatages from './components/Advantages/Advantages';
import rectangle from './img/Rectangle.svg'
import TrialV from './components/TrialVersion/TrialV';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Design />
      <Room />
      <Brand />
      <About />
      <Reviews />

      <div className='approach'>
        <p>We take a human approach to a business-to-business industry, breaking the boundaries between corporate and personal, and rethinking every step of the user experience along the way.</p>
        <p>We make work, work for you.</p>
      </div>

      <Advatages />

      <div className='rectanagle-img container'>
        <img src={rectangle} />
      </div>  

      <TrialV />
      <Footer />
    </div>
  );
}

export default App;
