import NavbarSec from './Navbar.jsx';
import Partner from './Partner.jsx';
import About from './About.jsx';
import TrendingGames from './TrendingGames.jsx';
import Features from './Features.jsx';
import VideoTrailer from './VideoTrailer.jsx';
import Teams from './Teams.jsx';
function Header(){
    return(
        <>
        <section className="header-sec">
        <NavbarSec />
        <div className='header-content '>
        <h2 className='banner-head'>Become part of the</h2>
        <h2 className='font-diff banner-head'>amazing Esport community</h2>
        <p className='stylePara'>It is very important for the customer to be aware of the fact that the customer needs to be able <br></br> to decorate the product in the two elements</p>
        <div className='butons'>
        <button className='styleBtn colorBtn'>get started</button>
        <button className='clasic-btn styleBtn'>go to discord</button>
        </div>
        </div>
        </section>
        <section className='banner-sec'>
        <Partner />
        </section>
        <section className='about-sec'>
        <About />
        </section>
        <section className='trending-games'>
        <TrendingGames />
        </section>
        <section className='features-section'>
        <Features />
        </section>
        <section className='trailer-section'>
        <VideoTrailer />
        </section>
        <section className='teams-section'>
            <Teams />
        </section>
        </>
    )
}

export default Header;