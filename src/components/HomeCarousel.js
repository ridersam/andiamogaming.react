import MainCarousel from '../components/MainCarousel';
import mobile from "../app/assets/img/gamingmobilethin.png";
import retro from "../app/assets/img/gamingretrothin.png";
import vr from '../app/assets/img/gamingvrthin.png';
import pc from '../app/assets/img/gaminpcthin.png';

const images = [
    mobile,
    retro,
    vr,
    pc,
];

function HomeCarousel() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Image Carousel using React and Framer Motion</h1>
          </header>
          <main>
            <MainCarousel images={images} />
          </main>
        </div>
      );
    }
    export default HomeCarousel;