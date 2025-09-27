import Banner from "../components/Banner";
import New from "../components/News";
function News() {
    return(
        <>
        <Banner 
        title="Latest News"
        subtitle="From Our Blog"
        discription="It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements."
        primaryBtn="get started"
        secondaryBtn="go to discord"
        />
        <New />
        </>
    
)}
export default News;