import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import team1 from "../assets/Team-1.png";
import team2 from "../assets/Team-2.png";
function Teams(){
    return(
        <>
        <section className='teams-section'>
        <Container>
            <Row>
                <Col className="d-flex align-items-center justify-content-between"><h2 className="teams-h2 about-h2">Meet our developers</h2>
                <button className="styleBtn colorBtn"><Nav.Link>See All</Nav.Link></button>
                </Col>
            </Row>
            <Row className="text-center gap-5 team-padding">
                <Col className="Team-cards">
                <img src={team1} alt="" />
                <h4 className="h4-teams">Martin Danelio</h4>
                <p className="p-teams">Founder</p>
                </Col>
                <Col  className="Team-cards">
                <img src={team2} alt="" />
                <h4 className="h4-teams">Kelly Orban</h4>
                <p className="p-teams">manager</p>
                </Col>
                <Col  className="Team-cards">
                <img src={team1} alt="" />
                <h4 className="h4-teams">Alice Thompson</h4>
                <p className="p-teams">designer</p>
                </Col>
                <Col  className="Team-cards">
                <img src={team2} alt="" />
                <h4 className="h4-teams">Samuel Chang</h4>
                <p className="p-teams">developer</p>
                </Col>
            </Row>
        </Container>
        </section>
        </>
    )
}
export default Teams;