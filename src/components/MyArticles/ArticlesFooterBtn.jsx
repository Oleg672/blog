import React from 'react';
import ButtonPagination from './ButtonPagination';


function ArticlesFooterBtn({ PagePagination1, ArticlePagination1, buttons  }) {
    
    function pagination(e) {
        ArticlePagination1(parseInt(e.target.value));
        
    }
    return (
        <div className='NavBtn'>
            <button className="NavBtn__btn" onClick={(e) => { (PagePagination1 > 1) ? (ArticlePagination1(parseInt(PagePagination1) - parseInt(1))) : (ArticlePagination1(PagePagination1)) }} disabled={PagePagination1 > 1 ? false : true} >&lt;</button>
            {buttons.map((item) => (
                PagePagination1 === item || PagePagination1 === item + 1 || PagePagination1 === item + 2 || PagePagination1 === item - 1 || PagePagination1 === item - 2 ? <ButtonPagination key={item} ActiveButton={PagePagination1} pagination={pagination}>{item}</ButtonPagination> : null
            ))}
            <button className="NavBtn__btn" onClick={(e) => { (PagePagination1 < buttons.length) ? (ArticlePagination1(parseInt(PagePagination1) + parseInt(1))) : (ArticlePagination1(PagePagination1)) }} disabled={PagePagination1 < buttons.length ? false : true} >&gt;</button>
        </div>
    );
}

export default ArticlesFooterBtn;