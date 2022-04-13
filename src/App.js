
import './App.css';
import BlueCard from './components/BlueCard/BlueCard';
import FadeSlider from './components/FadeSlider/FadeSlider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import LazyLoadImage from './components/LazyLoad/LazyLoadImage';
import MultiItemCarousel from './components/LazyLoad/MultiItemCrousel';
import Paragraph from './components/Paragraph/Paragraph';
import SmallSlider from './components/SmallSlider/SmallSlider';


function App() {
  return (
    <>
      <Header />
      <div style={{backgroundColor:'#353535'}}>
      <SmallSlider />
      </div>
      <div>

      <FadeSlider />
      </div>
      <h1 className='headline'>Highlights</h1>
        <MultiItemCarousel />
        <MultiItemCarousel />
        <MultiItemCarousel />
        <h1 className='headline'>Popular Brands</h1>
        <MultiItemCarousel />
        <MultiItemCarousel />
        <MultiItemCarousel />
        <BlueCard />
        <Paragraph />
        <Footer />
    </>
  );
}

export default App;
