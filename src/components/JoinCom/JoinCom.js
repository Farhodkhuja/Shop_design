import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
const Join = () => {
    return (
        <div>
            <Joincss>
                <div className="container">
                    <h3 className="get">Join our newsletter and get 20% off</h3>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className="jp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 int">
                            <input type="text" className="inputj" placeholder="Enter Email" />
                            <button type="submit" className="jbtns">Subscribe</button>
                        </div>
                    </div>
                </div>
            </Joincss>
        </div>
    )
}
const Joincss = styled.div`
     .container {
         max-width: 65% !important;
         margin: auto !important;
         padding: 180px 20px;
         .get {
             color: #102A42;
             font-size: 32px;
             margin-top: 50px;
             margin-bottom: 20px;
         }
         .row {
             margin-bottom: 50px;
             .jp {
                 color: #617D98;
                 font-size: 16px;
             }
             .int {
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 .inputj{
                     width: 380px;
                     height: 38px;
                     padding: 8px 16px;
                     border: 2px solid #324d67;
                     border-right: none;
                 }
                 .jbtns {
                    background: #ab7a5f;
                    color: #222222;
                    padding: 5px 16px;
                    font-size: 16px;
                    border: 2px solid #324d67;
                    font-family: Arial, Helvetica, sans-serif;
                    transition: all 0.3s linear;
                    cursor: pointer;
                    letter-spacing: var(0.1rem);
                    cursor: pointer;
                    text-transform: capitalize;
                 }
                 .jbtns:hover {
                     color: #FFFFFF;
                 }
             }
         }
     }
`
export default Join;