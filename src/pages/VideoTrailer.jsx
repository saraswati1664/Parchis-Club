import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { VideoPlayer, CallDuty } from "../components/VideoPlayer";

function VideoTrailer(){
    return(
        <>
        <Container>
        <Row className="gap-5 give-position">
            <CallDuty />
            <Col>
             <Row>
                <Col><p className="feature-p">We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power. Games are a language of storytelling. We’re looking for games that develop and expand this language.</p></Col>
                <Col><p className="feature-p">We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.
Games are a language of storytelling. We’re looking for games that develop and expand this language.</p></Col>
             </Row>
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default VideoTrailer;