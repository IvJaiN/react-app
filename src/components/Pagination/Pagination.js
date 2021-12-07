// import './Pagination.css'

import React from 'react';

const Pagination = ({totalPages, page, changePage}) => {
    const arrayPages = [...Array(totalPages).keys()] // create array pages
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {arrayPages.map(item => (
                    <li
                        key={item}
                        className="page-item"
                        onClick={() => changePage(item + 1)}
                    >
                        <span className="page-link " onClick={() => changePage(item + 1)}>{item + 1}</span>
                    </li>))}
            </ul>
        </nav>
    );
};

export default Pagination;