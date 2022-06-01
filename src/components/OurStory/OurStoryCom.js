import React from "react";
import styled from "styled-components";
import Img from "../../images/photo_2021-05-26_15-38-01.jpg";

const OurStoryCom = ()=>{
    return(
        <Container>
            <div className="container">
                <div className="row mb-5 mt-5">
                    <div className="col-md-6 col-12 mt-5 my-5">
                        <img className="hero-img" src={Img} alt="Photo"/>
                    </div>
                    <div className="col-md-6 col-12 mt-5 my-5">
                        <h2 style={{fontSize:"2.5rem"}}>Our Story</h2>
                        <div className="line"> </div>
                        <p className="hero-p">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente
                            tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi,
                            omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore,
                            obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio
                            eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum,
                            nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex,
                            voluptate accusamus nesciunt totam vitae esse iste.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  .container {
    max-width: 80% !important;
    margin: auto !important;
    .hero-img{
      width: 553px;
      height: 500px;
      border-radius: 7px;
    }
    .hero-p{
      line-height: 2;
      max-width: 45em;
      margin: 2rem auto 0;
      color: #617d98;
    }
    .line {
      width: 90px;
      height: 4px;
      background-color: #ab7a5f;
    }
  }
`

export default OurStoryCom;