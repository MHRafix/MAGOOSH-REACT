import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './GlobalCss/GlobalCss.css';
import WebAndMobile from './pages/HomePage/CompareSection/WebAndMobile';
import FeatureSection from './pages/HomePage/FeatureSection/FeatureSection';
import Hero from './pages/HomePage/HeroSection/Hero';
import HireingSection from './pages/HomePage/HireingSection/HireingSection';
import PartnerSection from './pages/HomePage/PartnerSection/PartnerSection';
import TestimonialSection from './pages/HomePage/TestimonialSection/TestimonialSection';
import TestResourses from './pages/HomePage/TestResourses/TestResourses';
import Footer from './pages/SharedComponents/Footer/Footer';
import Header from './pages/SharedComponents/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
            <FeatureSection />
            <TestimonialSection />
            <WebAndMobile />
            <PartnerSection />
            <TestResourses />
            <HireingSection />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
