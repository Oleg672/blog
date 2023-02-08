import React, { useContext } from 'react';
import { SidebarContext } from '../providers/SidebarProvider';


function Gamburger(props) {
    const {Opened,setOpened}=useContext(SidebarContext)
    return (
            
        <div className={'gamburger nav-toggle'+ ( Opened ? ' opened' : "")} onClick={()=>{
            setOpened(!Opened);
            }}> 
            <span class="bar-top opened"></span>
            <span class="bar-mid opened"></span>
            <span class="bar-bot opened"></span>dddddd
        </div>
    );

}

export default Gamburger;
