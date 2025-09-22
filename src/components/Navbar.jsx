import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarSec(){
    return(
        <>
        <Container>
        <Navbar expand="lg" className="navbaar px-4 py-3 d-flex justify-content-between" style={{background: '#ffffff1A', borderRadius: '0 0 40px 40px'}}>
        <div className="nav-logo" href="#">parchis club</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className='option-contain'>
        <Nav className="nav-options">
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link><button className="styleBtn colorBtn">Read More</button></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
        </>
    )
}

export default NavbarSec;