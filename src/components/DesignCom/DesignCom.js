import React from "react";
import styled from "styled-components";
import DesignImg from '../../images/Group 1.png'

const DesignCom = () => {
  return (
    <Container>
      <div className="container">
        <div className="row mt">
          <div className="col-lg-6 col-12">
            <div className="design-text">
              <h1 className="design-h1">Design Your <br /> Comfort Zone</h1>
              <p className="design-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
              sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio
              ducimus, obcaecati libero et quia tempora excepturi quis alias?
                            </p>
              <button className="btn bt text-uppercase">shop now</button>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-lg-2">
            <img className="design-img" src={DesignImg} alt="Photo" />
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .container {
    max-width: 65% !important;
    margin: auto !important;

    .mt {
      margin-top: 10rem;

      .design-img {
        width: 100%;
        height: 550px;
        @media only screen and (max-width: 400px) {
          display: none;
        }
      }

      .design-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 550px;
        .design-h1 {
          font-size: 3rem;
        }
        .design-p{
          font-size: 1.25rem;
          line-height: 2;
          max-width: 45em;
        }
        .bt{
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          border-color: transparent;
          background-color: #c5a491;
          color: #eaded7;
        }
        .bt:hover{
          background-color: #eaded7;
          color: #453227;
        }
      }
    }
  }
`

export default DesignCom;