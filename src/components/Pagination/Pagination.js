import './Pagination.css'

import React from 'react';

const Pagination = ({totalPages, page, changePage}) => {
    const arrayPages = [...Array(totalPages).keys()] // превращаем число в массив чисел до текущего
    return (
        <ul className='pagination'>
            {arrayPages.map(item => (
                <li
                    className={item + 1 === page ? 'pagination__item _active' : 'pagination__item'}
                    onClick={() => changePage(item + 1)}
                >{item + 1}</li>))}
        </ul>
    );
};

export default Pagination;