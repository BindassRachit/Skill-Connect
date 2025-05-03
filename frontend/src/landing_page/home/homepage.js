import Navbar from '../navbar';
// import Footer from '../footer';
import PopularServicesSlider from './service_slider';

function HomePage() {
    return(
        <>
            <Navbar />
            <div>
            <PopularServicesSlider />
            </div>
                
            {/* <Footer /> */}
        </>
    )
}

export default HomePage;