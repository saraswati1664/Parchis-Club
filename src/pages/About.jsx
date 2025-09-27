import Feature from "../components/About"
import Banner from "../components/Banner"
function About(){
    return(
        <>
        <Banner
        title="About Us"
        subtitle="Who We Are"
        discription="It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements."
        primaryBtn="get started"
        secondaryBtn="go to discord"
        />
        <Feature />
        </>
    )
}
export default About;