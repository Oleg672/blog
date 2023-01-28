import React, { useState } from 'react';


function ArticlesFooterBtn({ PagePagination1, ArticlePagination1, countPage }) {
    
    return (
        <div className='NavBtn'>
            <button className="NavBtn__btn" onClick={(e) => { (PagePagination1 > 1) ? (ArticlePagination1(parseInt(PagePagination1) - parseInt(1))) : (ArticlePagination1(PagePagination1)) }} disabled={PagePagination1 > 1 ? false : true} >&lt;</button>
            <button type='checkbox' className="NavBtn__btn active" onClick={(e) => { ArticlePagination1(parseInt(e.target.value)); }} value={1}>1</button>
            <button type='checkbox' className="NavBtn__btn" onClick={(e) => { ArticlePagination1(parseInt(e.target.value)); }} value={2}>2</button>
            <button type='checkbox' className="NavBtn__btn" onClick={(e) => { ArticlePagination1(parseInt(e.target.value)); }} value={3}>3</button>
            <button className="NavBtn__btn" onClick={(e) => { (PagePagination1 < countPage) ? (ArticlePagination1(parseInt(PagePagination1) + parseInt(1))) : (ArticlePagination1(PagePagination1)) }} disabled={PagePagination1 < countPage ? false : true} >&gt;</button>
        </div>
    );
}

export default ArticlesFooterBtn;