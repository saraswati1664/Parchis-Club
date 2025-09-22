import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function TrendingGames(){
    return(
        <>
        <Container>
        <div className='trends-div'>
            <h2 className="trending-h2 about-h2">Currently Trending Games</h2>
            <Nav.Link><button className='colorBtn styleBtn'>See All</button></Nav.Link>
        </div>
        <Row className='give-something'>
            <Col className='card-1'>
            <img className='images trendy-image-1' src="src\assets\trndy-games-1.png" alt="" />
            <div className='image-position'><span>40 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src="src\assets\fire 1.png" alt="" /></span> 40 Followers</p>
            </Col>
            <Col className='card-1' >
            <img className='images' src="src\assets\trendy-game-back.png" alt="" />
            <div className='image-position'><span>50 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src="src\assets\fire 1.png" alt="" /></span> 50 Followers</p>
            </Col>
            <Col className='card-1'>
            <img className='images' src="src\assets\trendy-games-2.png" alt="" />
            <div className='image-position'><span>30 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src="src\assets\fire 1.png" alt="" /></span> 30 Followers</p>
            </Col>
            <Col className='card-1'>
            <img className='images' src="src\assets\trendy games-3.png" alt="" />
            <div className='image-position'><span>60 k</span><h4>Awarded</h4></div>
            <p className='fire-para text-center'><span><img src="src\assets\fire 1.png" alt="" /></span> 60 Followers</p>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default TrendingGames;