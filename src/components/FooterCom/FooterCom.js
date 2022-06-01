import React from 'react'
import styled from 'styled-components';

const FooterCom = () => {
    return (
        <div>
            <Footer>
                <div className="box">
                    <div className="container" style={{textAlign:"center"}}>
                        <h3 className="all">© 2021 <span> ComfySloth </span> All rights reserved </h3>
                        <small style={{color:"white"}}>
                            Designed by X.Farhodkhuja 
                        </small>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </Footer>
        </div>
    )
}
const Footer = styled.div`
    width: 100% !important;
    .box {
      background: #222222;
      width: 100%;
      height: 80px;
    }
    .all {
        text-align: center;
        padding-top: 20px;
        font-size: 16px;
        color: white;
        span {
            color: #AB7A5F;
        }
    }
`

export default FooterCom;

