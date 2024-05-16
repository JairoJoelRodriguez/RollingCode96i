import {Navbar,Nav} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
const NavbarApp = () => {
  return (
    <Navbar className='d-flex justify-content-center text-white'>
        <Nav className='me-auto'>
            <Link className='navbar-branch' to="/">
                <img src="" alt="" />
            </Link>
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/nosotros">
              Nosotros
            </NavLink>
            <NavLink className="nav-link" to="/ingresar">
              Ingresar
            </NavLink>
        </Nav>
    </Navbar>
  )
}

export default NavbarApp