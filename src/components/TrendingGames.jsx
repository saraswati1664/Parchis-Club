import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trendy1 from '../assets/trndy-games-1.png';
import fire from '../assets/fire 1.png';
import trendyBack from '../assets/trendy-game-back.png';
import trendy2 from '../assets/trendy-games-2.png';
import trendy3 from '../assets/trendy games-3.png';
function TrendingGames(){
    return(
        <>
        <section className='trending-games'>
        <Container>
        <div className='trends-div'>
            <h2 className="trending-h2 about-h2">Currently Trending Games</h2>
            <Nav.Link><button className='colorBtn styleBtn'>See All</button></Nav.Link>
        </div>
        <Row className='give-something'>
            <Col className='card-1'>
            <img className='images trendy-image-1' src={trendy1} alt="" />
            <div className='image-position'><span>40 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src={fire} alt="" /></span> 40 Followers</p>
            </Col>
            <Col className='card-1' >
            <img className='images' src={trendyBack} alt="" />
            <div className='image-position'><span>50 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src={fire} alt="" /></span> 50 Followers</p>
            </Col>
            <Col className='card-1'>
            <img className='images' src={trendy2} alt="" />
            <div className='image-position'><span>30 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src={fire} alt="" /></span> 30 Followers</p>
            </Col>
            <Col className='card-1'>
            <img className='images' src={trendy3} alt="" />
            <div className='image-position'><span>60 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src={fire} alt="" /></span> 60 Followers</p>
            </Col>
        </Row>
        </Container>
        </section>
        </>
    )
}

export default TrendingGames;