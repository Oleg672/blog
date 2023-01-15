import React from 'react';


function Gamburger(props) {
    const [Opened, setOpened] = React.useState(false);
    return (
        
        <div className={'gamburger nav-toggle'+ ( Opened ? ' opened' : "")} onClick={()=>{
            props.onClickGamburger1();
            setOpened(!Opened);
            console.log(Opened );
            }}>
            <span class="bar-top opened"></span>
            <span class="bar-mid opened"></span>
            <span class="bar-bot opened"></span>
        </div>
    );

}

export default Gamburger;
