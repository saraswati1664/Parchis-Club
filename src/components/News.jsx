import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function News(){
    return(
        <>
        <Container>
            <Row className="text-center">
                <h2 className="about-h2">Our latest news</h2>
                <p className="news-p feature-p">It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements.</p>
            </Row>

            <Row>
                <Col md={4} className="news-card">
                <img width="100%" src="src\assets\latest-news.png" alt="" />
                <div className="show-need">
                    <p className="news-p feature-p">MAY 2, 2024  |  ADMIN </p>
                    <h4 className="h4-news h4-teams">A Guide to Latest Style and Techniques</h4>
                    <Nav.Link className="link-tag">Learn More</Nav.Link>
                </div>
                </Col>
                <Col md={4} className="news-card">
                <img width="100%" src="src\assets\latest-news-2.png" alt="" />
                <div className="show-need">
                    <p className="news-p feature-p">MAY 2, 2024  |  ADMIN </p>
                    <h4 className="h4-news h4-teams">A Guide to Latest Style and Techniques</h4>
                    <Nav.Link className="link-tag">Learn More</Nav.Link>
                </div>
                </Col>
                <Col md={4} className="news-card">
                <img width="100%" src="src\assets\latest-news-3.png" alt="" />
                <div className="show-need">
                    <p className="news-p feature-p">MAY 2, 2024  |  ADMIN </p>
                    <h4 className="h4-news h4-teams">A Guide to Latest Style and Techniques</h4>
                    <Nav.Link className="link-tag">Learn More</Nav.Link>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default News;