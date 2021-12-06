import './Pagination.css'

import React from 'react';

const Pagination = ({totalPages, page, changePage}) => {
    const arrayPages = [...Array(totalPages).keys()] // create array pages
    return (
        <ul className='pagination'>
            {arrayPages.map(item => (
                <li
                    key={item}
                    className={item + 1 === page ? 'pagination__item _active' : 'pagination__item'}
                    onClick={() => changePage(item + 1)}
                >{item + 1}</li>))}
        </ul>
    );
};

export default Pagination;