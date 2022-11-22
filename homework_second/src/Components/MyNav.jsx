import { Navbar, Nav } from 'react-bootstrap'

const MyNav = ({ subtitle }) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Epistaurant - {subtitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#reservation">Reservation</Nav.Link>
          <Nav.Link href="#findus">Find us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)

export default MyNav