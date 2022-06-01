import React from "react";
import styled from "styled-components";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const NavbarCom = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <div className="container">
                  <img  src="/images/logo.221f6b13.svg" alt="comfy sloth"></img>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link className="nav-link nik" to="/">Home</Link>
                            <Link className="nav-link nik" to="/About">About</Link>
                            <Link className="nav-link nik" to="/Products">Products</Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/">Cards<i className="fas fa-shopping-cart"/></Link>
                            <Link className="nav-link" to="/">Login <i className="fas fa-user-plus"/></Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>
    )
}

const Container = styled.div`
  min-height: 80px !important;
  .container {
    max-width: 65% !important;
    margin: auto !important;
    img{
      @media only screen and (max-width: 600px) {
        width: 30vw;
      }
    }
    .navbar-brand {
      background-color: #FFFFFF !important;
      color: black !important;
      font-size: 30px;
    }
    .nav-link {
      color: black;
      font-size: 20px !important;
      margin-right: 30px !important;
      .fa-shopping-cart, .fa-user-plus{
        margin-left: 8px;
      }
    }
    .nav-link:last-child{
      margin-right: 0 !important;
    }
      .nik {
           transition: 0.1s ease-in-out;
       }
       .nik:hover {
           border-bottom: 5px solid #AB7A5F;
       }
  }
`

export default NavbarCom;