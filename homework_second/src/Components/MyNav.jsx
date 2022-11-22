import { Navbar, Nav } from 'react-bootstrap'

const MyNav = ({ subtitle }) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#menu">Home</Nav.Link>
          <Nav.Link href="#reservation">About</Nav.Link>
          <Nav.Link href="#findus">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)

export default MyNav