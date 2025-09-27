
import Partner from "./Partner";
import About from "./About-C";
import TrendingGames from "../components/TrendingGames";
import Feature from "../components/About";
import VideoTrailer from "./VideoTrailer";
import Teams from "./Teams";
import News from "../components/News";
import Rating from "./Rating";
import Banner from "../components/Banner";
function Home() {
  return (
    <>
    <Banner
    title="Become part of the"
    subtitle="amazing Esport community"
    discription="It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements."
    primaryBtn="get started"
    secondaryBtn="go to discord"
    />
        <Partner />
        <About />
        <TrendingGames />
        <Feature />
        <VideoTrailer />
        <Teams />
        <News />
        <Rating />
        
    </>
  )
}

export default Home;