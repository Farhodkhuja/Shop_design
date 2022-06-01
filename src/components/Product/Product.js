import React, {useContext} from "react";
import styled from "styled-components";
import {Context} from "../../contex";
import Products from "./Products";


const Product = () => {
    const {prodArray} = useContext(Context)
    return (
        <Container>
          <div className="container">
                <div className="row mt"></div>
          <div className="row">
                    {prodArray.map(el => {
                        return (
                            <div key={el.id} className="col-lg-4 col-12">

                                <div className="card border-0 bg-transparent">
                                    <Products el={el}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
                {/* <div className="second_style">
                    {prodArray.map(el => {
                        return (
                            <div key={el.id} className="card">
                                <div className="Img">
                                    <img src={el.image} alt={el.name} />
                                </div>
                                <div>
                                    <h3>{el.name}</h3>
                                    <p>{el.price}$</p>
                                    <p>{el.description}</p>
                                    <button className="">Details</button>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            {/* <div className="container">
                <div className="row mt">

                </div>
                <div className="row">
                    {array.slice().map(el => {
                        return (
                            <div className="col-lg-4 col-12">
                                <div className="card border-0 bg-transparent">
                                    <Products el={el}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}
        </Container>
    )
}

const Container = styled.div`


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

export default Product;