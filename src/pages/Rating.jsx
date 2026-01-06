import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import beforeFooter from "../assets/before-footer.png";
import Ratingimg from "../assets/start-rating.png";

function Rating(){
    return(
        <>
        <section className='rating-section'>  
        <Container>
            <Row>
                <Col>
                <h2 className="about-h2">The Intelligent Revolution: AI Shaping Our Future</h2>
               
                </Col>
                <Col className="hi-here">
                <div><img width="100%" src={beforeFooter} alt="" /></div>
                 <div className="rating-box">
                    <p className="rating-p">The website's user-friendly interface makes it easy to navigate and access a wide range of content, including cutting-edge AI solutions, informative case studies, and expert insights. Networking opportunities and funding resources</p>
                    <Row>
                        <Col>
                        <h4 className="h4-rating">James Smiths</h4>
                        <p className="p-rating">Client</p>
                        </Col>
                        <Col>
                        <img src={Ratingimg} alt="" />
                        </Col>
                    </Row>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
        </>
    )
}

export default Rating;