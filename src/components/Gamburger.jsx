import React from 'react';


function Gamburger(props) {
    return (
        
        <div className='gamburger nav-toggle ' onClick={props.onClickGamburger1}>
            <span class="bar-top opened"></span>
            <span class="bar-mid opened"></span>
            <span class="bar-bot opened"></span>
        </div>
    );

}

export default Gamburger;
