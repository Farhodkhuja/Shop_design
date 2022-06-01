import React,{useContext} from 'react';
import styled from 'styled-components';
import {Context} from '../../Context.js';

const ProdCategory = () => {
    const {categories,filterCategory,companies,filterCompany} = useContext(Context);

    return (
        <div>
            <Category>
                <div className="categories_item">
                    <h1>Category</h1>
                    {categories.map((category,index)=>{
                        return(
                            <button
                                
                                
                                key={index}
                                onClick={() => filterCategory(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div>
                <div className="company_item">
                    {companies.map((company,index)=>{
                        return(
                            <button
                                
                                key={index}
                                onClick={()=> filterCompany(company)}>
                                {company}
                            </button>
                        )
                    })}
                </div>
                <div className="color_item">
                   
                </div>
                <div className="price_item">
                    
                </div>
                <div className="free_items">
                    
                </div>
                <div className="clear_item">
                    
                </div>
            </Category>
        </div>
    )
}
const Category = styled.div`

`

export default ProdCategory
