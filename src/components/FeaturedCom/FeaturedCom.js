import React, {useContext} from "react";
import FeaturedPhotoCom from "./FeaturedPhotoCom";
import styled from "styled-components";
import {Context} from "../../contex";


const FeaturedCom = () => {
    const {prodArray} = useContext(Context)
    return (
        <Container>
            <div className="container">
                <div className="row mt">
                    <h2 style={{textAlign: "center", marginTop: "70px"}}>Featured Products</h2>
                    <div className="line"> </div>
                </div>
                <div className="row">
                    {prodArray.slice(7, 10).map(el => {
                        return (
                            <div className="col-lg-4 col-12">
                                <div className="card border-0 bg-transparent">
                                    <FeaturedPhotoCom el={el}/>
                                </div>
                            </div>
                        )
                    })}
                    <button className="btn bt text-uppercase">All Products</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  background-color: #f1f5f8;

  .container {
    max-width: 65% !important;
    margin: auto !important;

    .row {
      .bt {
        width: 158px;
        margin: 60px auto;
        text-align: center;
        background-color: #ab7a5f;
        color: #eaded7;
        padding: .375rem .75rem;
        letter-spacing: .1rem;
      }
    }
    .mt {
      margin: 170px 0 60px 0;

      .line {
        width: 90px;
        height: 4px;
        background-color: #ab7a5f;
        margin: 7px auto;
      }
    }
  }
`

export default FeaturedCom;