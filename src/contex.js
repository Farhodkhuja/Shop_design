// import React, {createContext, useState, useEffect} from "react";

// const Context = createContext();

// const ContextProvider = ({children}) => {
//     const url = "https://course-api.com/react-store-products"
//     const [array, setArray] = useState([])
//     const getData = async () => {
//         const response = await fetch(url)
//         const data = await response.json()
//         setArray(data)
//     }
//     useEffect(() => {
//         getData()
//     }, [])


//     return (
//         <div>
//             <Context.Provider value={{array}}>
//                 {children}
//             </Context.Provider>
//         </div>
//     )
// }

// export {ContextProvider, Context};
import React, { createContext, useState, useEffect } from 'react';



const Context = createContext()

const ContextProvider = ({ children }) => {
    
    const [prodArray, setProdArray] = useState([])

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProdArray(data)
    }
    useEffect(() => {
        getData()
    }, []);

    const allCategories = ['all', ...new Set(prodArray.map(el => el.category))]
    const categories = [...allCategories];
    const allCompany = ['all', ...new Set(prodArray.map(el => el.company))]
    // console.log(allCategories);
    console.log(allCompany);

    // const [categories, setCategories] = useState(categories)
    const [companies, setCompanies] = useState(allCompany)
    

    const url = 'https://course-api.com/react-store-products';    

    

    function filterCategory(category){
        if(category === 'all'){
            getData()
        }
        const newCategory = prodArray.filter(el => el.category === category)
        setProdArray(newCategory)
    }

    function filterCompany(company) {
        if (company === 'All') {
            getData()
        }
        const newCompany = prodArray.filter(el => el.company === company);
        setProdArray(newCompany)
    }
    
    return (

        <Context.Provider value={{ prodArray, companies, filterCompany,categories,filterCategory }}>
            {children}
        </Context.Provider>

    )
}

export { ContextProvider, Context }
