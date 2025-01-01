import React from 'react'
import './stylecompo/PaginationComponent.css'

function PaginationComponent({ totalPages, currentPage, onPageChange }) {
    const buttons = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 14);

    for (let i = startPage; i <= endPage; i++) {
        buttons.push(
            <button className='pagination'
                key={i}
                onClick={() => onPageChange(i)}
                style={{
                    margin: '5px',
                    backgroundColor: i === currentPage ? '#ea0071' : '#ff92bb',
                    color: 'white',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '4px',
                    padding: '10px 15px',
                    cursor: 'pointer',
                }}
            >
                {i}
            </button>
        );
    }

    return (
        <>{buttons}</>
    )
}

export default PaginationComponent