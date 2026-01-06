import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import location from "../assets/location.png";
import call from "../assets/call.png";

function Footer(){
    return(
        <>
        <Container>
            <Row className="footer-back">
                <Col>
                <h3 className="h3-footer">parchis club</h3>
                <p className="footer-para">It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
                <h4 className="h4-footer">Find Us On:</h4>
                <div className="footer-icon-div">
                    <Nav.Link><i className="fa-brands fa-facebook-f " style={{color: "#ffffff"}}></i></Nav.Link>
                    <Nav.Link ><i className="fa-brands fa-twitter icons-footer" style={{color: "#ffffff"}}></i></Nav.Link>
                    <Nav.Link><i className="fa-brands fa-linkedin-in icons-footer" style={{color: "#ffffff"}}></i></Nav.Link>
                    <Nav.Link><i className="fa-brands fa-instagram icons-footer" style={{color: "#ffffff"}}></i></Nav.Link>
                </div>
                </Col>
                <Col className="text-center">
                <h3 className="h3-footer-mid">Quick Links</h3>
                <ul className="lists-footer">
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Our Portfolio</li>
                    <li>Our Team</li>
                    <li>Testimonials</li>
                </ul>
                </Col>
                <Col>
                <h3 className="h3-footer-mid">Contact Info</h3>
                <div className="d-flex align-items-baseline justify-content-between gap-3 contain-footer-div">
                <img src={location} alt="" />
                <p className="footer-para">1234, ABC Apartments, XYZ Street, Near LMN Market, Sector 15, Cityname - 110011, State, India.</p>
                </div>
                <div className="d-flex align-items-baseline justify-content-left gap-3 contain-footer-div">
                <img src={call} alt="" />
                <h5 className="footer-para"> +91-9876543210</h5>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer;