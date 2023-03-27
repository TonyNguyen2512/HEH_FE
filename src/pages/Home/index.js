import '../../App.css';
import About from '../../components/Home/About';
import Contact from '../../components/Home/Contact';
import Footer from '../../components/Home/Footer';
import Testimonial from '../../components/Home/Testimonial';
import Work from '../../components/Home/Work';
import Introduction from './Intro';

function App() {
    return (
        <div className="App">
            <Introduction />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
