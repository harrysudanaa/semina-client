import { Container, Nav, Navbar } from "react-bootstrap";
import SNavLink from "../Navlink";
import { useNavigate } from "react-router";

export default function SNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <SNavLink action={() => navigate("/")}>Home</SNavLink>
          <SNavLink action={() => navigate("/categories")}>Categories</SNavLink>
          <SNavLink action={() => navigate("/talents")}>Talents</SNavLink>
          <SNavLink action={() => navigate("/events")}>Events</SNavLink>
          <SNavLink action={() => navigate("/participant")}>
            Participant
          </SNavLink>
          <SNavLink action={() => navigate("/transactions")}>
            Transactions
          </SNavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
