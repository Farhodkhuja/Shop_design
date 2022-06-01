// import React from 'react'
// import styled from 'styled-components'

// const Search = () => {
//     return (
//         <FiltrStyle>
//             <input type="text" name="text" placeholder="search" class="search-input" value=""></input>
//             <div>
//                 <h1> Category  </h1>
//                 <div>
//                     <button className="Btn">All</button>
//                     <button className="Btn">Office</button>
//                     <button className="Btn">Living Room</button>
//                     <button className="Btn">Kitchen</button>
//                     <button className="Btn">Bedroom</button>
//                     <button className="Btn">Dining</button>
//                     <button className="Btn">Kids</button>
//                 </div>
//             </div>
//             <div className="wrapp">
//                 <h1 className="w-100">Company</h1>
//                 <select name="company" class="company">
//                     <option value="all">all</option>
//                     <option value="marcos">marcos</option>
//                     <option value="liddy">liddy</option>
//                     <option value="ikea">ikea</option>
//                     <option value="caressa">caressa</option>
//                 </select>
//             </div>
//             <div>
//             <h1 className="w-100">Color</h1>
//                 <button name="color" data-color="all" className="all-btn active">all</button>
//                 <button name="color" className="color-btn" data-color="#ff0000" style={{ background: "rgb(255, 0, 0)" }}></button>
//                 <button name="color" className="color-btn" data-color="#00ff00" style={{ background: "rgb(0, 255, 0)" }}></button>
//                 <button name="color" className="color-btn" data-color="#0000ff" style={{ background: "rgb(0, 0, 255)" }}></button>
//                 <button name="color" className="color-btn" data-color="#000" style={{ background: "rgb(0, 0, 0)" }}></button>
//                 <button name="color" className="color-btn" data-color="#ffb900" style={{ background: "rgb(255, 185, 0)" }}></button>
//             </div>
//             <div>
//                 <h5>price</h5>
//                 <p class="price">$3,099.99</p>
//                 <input type="range" name="price" min="0" max="309999" value="309999"></input>
//             </div>
//             <button type="button" class="clear-btn">clear filters</button>
//         </FiltrStyle>
//     )
// }

// const FiltrStyle = styled.div`
//     width: 30%;
//     height: 100vh;
//     position: sticky;
//     top: 0;
//     padding-left:15px ;

   
//         .all-btn {

//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: center;
//     justify-content: center;
//     margin-right: 0.5rem;
//     opacity: 0.5;
//     }
//     .color-btn {
//     width: 1rem;
//     height: 1rem;
//     border-radius: 50%;
//     background: rgb(34, 34, 34);
//     margin-right: 0.5rem;
//     border: none;
//     cursor: pointer;
//     opacity: 0.5;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: center;
//     justify-content: center;
// }
//     .wrapp{
//         display: flex;
//         flex-wrap: wrap;
//         align-items: center;
       
//         .company {
//             background: var(--clr-grey-10);
//             border-radius: var(--radius);
//             border-color: transparent;
//             padding: 0.25rem;    
//         }
        
//     }
//     .color-btn{

//     }
    
    
//     .Btn {
//     display: block;
//     margin: 0.25em 0px;
//     padding: 0.25rem 0px;
//     text-transform: capitalize;
//     background: transparent;
//     border-top: none;
//     border-right: none;
//     border-left: none;
//     border-image: initial;
//     border-bottom: 1px solid transparent;
//     letter-spacing: var(--spacing);
//     color: var(--clr-grey-5);
//     cursor: pointer;
//     }
//     .search-input {
//     padding: 0.5rem;
//     background: var(--clr-grey-10);
//     border-radius: var(--radius);
//     border-color: transparent;
//     letter-spacing: var(--spacing);
//     }

// `

// export default Search
