import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemCount,onPageChange, pageSize , currentPage} = props;
    const itemCountNumber = parseInt(itemCount, 10);
    const pageSizeNumber = parseInt(pageSize, 10);
    const pageCount = pageSize !== 0 ? Math.ceil(itemCountNumber / pageSizeNumber) : 0;
    const pages = _.range(1, pageCount + 1);

    
    return (<nav>
        <ul className='pagination'>
            {pages.map(page => (
            <li key={page}className={page === currentPage ? 'page-item active' : 'page-item'}>
                <a className='page-link' 
                onClick={()=>onPageChange(page)}>{page}
                </a>
            </li>
            ))}
        </ul>
    </nav>);
};

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired, 
    pageSize:PropTypes.number.isRequired , 
    currentPage: PropTypes.number.isRequired
}

export default Pagination;