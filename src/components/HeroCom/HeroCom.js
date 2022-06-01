import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const HeroCom = () => {
    return (
        <Container>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="hero">
                            <Link className="nav-link" to="/">Home /</Link>
                            <Link className="nav-link" to="/About">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  .container-fluid {
    background-color: #eaded7;
    min-height: 20vh !important;
    width: 100% !important;
  }
  .container {
    max-width: 70% !important;
    margin: auto !important;

    .hero {
      display: flex;
      align-items: center;
      height: 20vh;

      .nav-link {
        line-height: 1;
        font-size: 2rem;
        color: #795744;
        padding: 0.5rem;
        :first-child{
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    }
  }
`

export default HeroCom;