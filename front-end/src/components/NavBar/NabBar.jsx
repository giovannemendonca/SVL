import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SlUser } from "react-icons/sl"

const ContainerLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
const DividerLink = styled.div`
border-top: 1px solid #0000004b;
height: 1px;
width: 95%;
`
const Logo = styled.h2`
  font-size: 2rem;
  padding: 0 24px;
`
const IconUser = styled.span`
  font-size: 24px;
  padding: 8px;
`



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container>
        <Logo>
          <Link className='linkLogo' to={"/"}>SVL</Link>
        </Logo>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="PEDIDOS" id="collasible-nav-dropdown">
              <ContainerLink>
                <Link className='linkNav' to={"#"}>PEDIDOS</Link>
                <DividerLink></DividerLink>
                <Link className='linkNav' to={"#"}>Cadastrar pedido</Link>
              </ContainerLink>
            </NavDropdown>

            <NavDropdown title="LIVROS" id="collasible-nav-dropdown">
              <ContainerLink>
                <Link className='linkNav' to={"/books"}>LIVROS</Link>
                <DividerLink></DividerLink>
                <Link className='linkNav' to={"/registerBook"}>Cadastrar livro</Link>
              </ContainerLink>
            </NavDropdown>

            <NavDropdown title="CLIENTES" id="collasible-nav-dropdown">
              <ContainerLink>
                <Link className='linkNav' to={"/clientes"}>CLIENTES</Link>
                <DividerLink></DividerLink>
                <Link className='linkNav' to={"/registerClient"}>Cadastrar cliente</Link>
              </ContainerLink>
            </NavDropdown>


          </Nav>

          <Nav>
            <Nav.Link> <IconUser><SlUser /></IconUser>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;