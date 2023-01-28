import React, { useState } from 'react';


function ArticlesFooterBtn({ PagePagination1, ArticlePagination1, countPage }) {

    return (
        <div className='NavBtn'>
            <button className="NavBtn__btn" onClick={(value) => { (PagePagination1 > 1) ? (ArticlePagination1(parseInt(PagePagination1) -parseInt(1))): (ArticlePagination1(PagePagination1)) }}>&lt;</button>
            <button value={1} className="NavBtn__btn" onClick={(value) => { ArticlePagination1(parseInt(value.target.value)); }} >1</button>
            <button value={2} className="NavBtn__btn" onClick={(value) => { ArticlePagination1(parseInt(value.target.value)); }} >2</button>
            <button value={3} className="NavBtn__btn" onClick={(value) => { ArticlePagination1(parseInt(value.target.value)); }} >3</button>
            <button className="NavBtn__btn" onClick={(value) => { (PagePagination1 < countPage) ? (ArticlePagination1(parseInt(PagePagination1) +parseInt(1))) : (ArticlePagination1(PagePagination1)) }}>&gt;</button>
        </div>
    );
}

export default ArticlesFooterBtn;