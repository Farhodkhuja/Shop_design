import React from 'react';

const Allsearch = ({filterData, categories}) => {
    return (
        <div>
            <div className="btn-container">
                {categories.map((category, index) => {
                    return (
                        <button
                            type="button"
                            className="filter-btn"
                            key={index}
                            onClick={() => filterData(category)}>
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default Allsearch
