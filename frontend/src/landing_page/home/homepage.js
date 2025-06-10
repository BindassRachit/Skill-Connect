import LandingPage from './main_section';
import PopularServicesSlider from './service_slider';

function HomePage() {
    return(
        <>
            <LandingPage />
            <div style={{ backgroundColor: '#EFEFF7' }}>
            <PopularServicesSlider />
            </div>
        </>
    )
}

export default HomePage;