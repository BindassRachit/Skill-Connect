import LandingPage from './main_section';
import PopularServicesSlider from './service_slider';
import PopularFreelancer from './popular_freelancer';
import AiDraftSection from "./aidraftsection";

function HomePage() {
    return(
        <>
            <LandingPage />
            <div style={{ backgroundColor: '#EFEFF7' }}>
            <PopularServicesSlider />
            <PopularFreelancer />
            <AiDraftSection />
            
            </div>
        </>
    )
}

export default HomePage;