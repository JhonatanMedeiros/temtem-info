import React from "react";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link href="/" passHref>
        <Navbar.Brand>Temtem Info</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link href="/temtems" passHref>
            <Nav.Link>Creatures</Nav.Link>
          </Link>
          {/* <Link href="/tier-list" passHref> */}
          {/*  <Nav.Link>Tier List</Nav.Link> */}
          {/* </Link> */}
          {/* <Link href="/map" passHref> */}
          {/*  <Nav.Link>Map</Nav.Link> */}
          {/* </Link> */}
          {/* <Link href="/tier" passHref> */}
          {/*  <Nav.Link>Tier</Nav.Link> */}
          {/* </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
