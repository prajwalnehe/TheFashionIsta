import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'
import StyleInspiration from '../components/StyleInspiration'


import BestSeller from '../components/BestSeller'
import InteriorSolutions from '../components/InteriorSolutions'
import ModernLuxury from '../components/ModernLuxury'
import NewArrivalSofas from '../components/NewArrivalSofas'
import WhyChooseTheFashionIsta from '../components/WhyChooseTheFashionIsta'

const Home = () => {
    return (
        <>
            <HeroSection />
            <PopularCategories />
            <ModernLuxury />
            <NewArrivalSofas />
            <BestSeller />

            <StyleInspiration />
            <InteriorSolutions />
            <WhyChooseTheFashionIsta />


        </>
    )
}

export default Home
