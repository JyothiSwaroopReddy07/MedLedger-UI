import HeroSection from '../components/HeroSection.js';
import Features from '../components/Features.js';
import BentoGrids from '../components/BentoGrids.js';
import Footer from "../components/Footer";
import FAQ from '../components/FAQ.js';

export default function ResidentDashboard() {
    
    return(
        <div>    
            <HeroSection></HeroSection>
            <Features></Features>
            <BentoGrids></BentoGrids>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    )
    
}