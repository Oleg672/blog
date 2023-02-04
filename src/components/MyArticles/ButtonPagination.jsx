import React from 'react';

function ButtonPagination({ActiveButton,pagination, children}) {
    return (
        <>
            <button className={ActiveButton==children?"NavBtn__btn active":"NavBtn__btn"} onClick={(e) => pagination(e)} value={children}>{children}</button>
        </>
    );
}

export default ButtonPagination;