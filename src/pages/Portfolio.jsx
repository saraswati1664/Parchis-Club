import  Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";

function Portfolio() {
    return(
        <>
        <Banner
        title="Our Portfolio"
        subtitle="Recent Works"
        discription="It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements."
        primaryBtn="get started"
        secondaryBtn="go to discord"
        />
        <section style={{background: "black"}}>
        <TrendingGames />
        </section>
        </>
    )
}
export default Portfolio;