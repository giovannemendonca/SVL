import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SlUser } from "react-icons/sl"
import { IoMdExit } from "react-icons/io"
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

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
const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #aaa;
  font-size: 16px;
  padding: 8px 0 6px 32px;
  cursor: pointer;



`



function NavBar() {


  const { user, logout } = useContext(UserContext);


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container>
        <Logo>
          <Link className='linkLogo' to={"/app"}>SVL</Link>
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
                <Link className='linkNav' to={"/app/books"}>LIVROS</Link>
                <DividerLink></DividerLink>
                <Link className='linkNav' to={"/app/registerBook"}>Cadastrar livro</Link>
              </ContainerLink>
            </NavDropdown>

            <NavDropdown title="CLIENTES" id="collasible-nav-dropdown">
              <ContainerLink>
                <Link className='linkNav' to={"/app/clientes"}>CLIENTES</Link>
                <DividerLink></DividerLink>
                <Link className='linkNav' to={"/app/registerClient"}>Cadastrar cliente</Link>
              </ContainerLink>
            </NavDropdown>


          </Nav>

          <Nav >
            <Nav.Link> <IconUser><SlUser /></IconUser>{user}</Nav.Link>

            <Nav.Link onClick={logout}> <IconUser> <IoMdExit/></IconUser> Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;