import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Counter from './Counter'; // import the Counter

function About(){
    return(
        <>
        <Container>
            <Row className='row-1'>
                <Col md={6} sm={12} className='column-1-members'>
                <h2 className='about-h2'>Parchis Club Wants New Members</h2>
                <p className='stylePara about-para'>
                    It is very important for the customer to be aware of the fact that 
                    the customer needs to be able to decorate the product in the two elements
                </p>
                <div className='about-board'>
                    <Row className="innerboard align-items-center justify-content-between">
                        <Col>
                            <Row>
                                <Col className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='about-sec-h2'> 
                                            <span style={{ whiteSpace: 'nowrap' }}>
                                                <Counter target={4} duration={2000} />
                                            </span>
                                        </h2>
                                        <p className='about-board-p'>Leagues</p>
                                    </div>
                                    <span>
                                        <img src="src/assets/rectangles.png" alt="" />
                                    </span>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='about-sec-h2'> 
                                            <span style={{ whiteSpace: 'nowrap'}}>
                                                <Counter target={320} duration={2500} suffix=" H" />
                                            </span>
                                        </h2>
                                        <p className='about-board-p'>Total Streams</p>
                                    </div>
                                    <span>
                                        <img style={{marginLeft: '20px'}} src="src/assets/rectangles.png" alt="" />
                                    </span>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='about-sec-h2'> 
                                            <span style={{ whiteSpace: 'nowrap' }}>
                                                <Counter target={64} duration={3000} suffix=" K" />
                                            </span>
                                        </h2>
                                        <p className='about-board-p'>Awarded</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                </Col>

                <Col md={6} sm={12} className='give-position'>
                    {/* <img src="src/assets/want-new-members.png" alt="here is image" /> */}
                    <video  poster="src/assets/want-new-members.png"> <source src="https://www.youtube.com/watch?v=jAj_nbWYb7g&list=RDjAj_nbWYb7g&start_radio=1" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                    
                    <Nav.Link><i class="fa-regular fa-circle-play icon-tag"></i></Nav.Link>
                    <p className='imge-para-about'>Introducing Aquatik Esports | Now Recruiting</p>
                    <Row>
                        <Col md={6} className='d-flex gap-2 align-items-center'>
                            <span><img src="src/assets/check-circle.png" alt="" /></span>
                            <p className='bottom-img-para'>Lorem Ipsum is simply</p>
                        </Col>
                        <Col md={6} className='d-flex gap-2 align-items-center'>
                            <span><img src="src/assets/check-circle.png" alt="" /></span>
                            <p className='bottom-img-para'>Lorem Ipsum is simply</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About;
