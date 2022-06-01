import React from 'react'
import styled from 'styled-components'
import Hero from '../../components/Product/Hero/Hero'
import Product from '../../components/Product/Product'
import Search from '../../components/Product/Search'


const ProductCom = () => {
    return (
        <div>
            <Hero />
            <Prods>
                 
                {/* <Search /> */}
                <Product />
            </Prods>
           
        </div>
    )
}

const Prods = styled.div` 
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        /* grid-template-rows: 0.2fr 1.8fr; */
        gap: 2em 2em;
        width: 80%;
        margin: auto;
        grid-template-areas:
            "b c"
            "b c"
            ". c";
        
        .b { grid-area: b; }
        .c { grid-area: c; }
`

export default ProductCom
