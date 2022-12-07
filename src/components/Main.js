import React from 'react';
import RightContent from './RightContent';
import Sidebar from './Sidebar';

function Main(props) {
    return (
        <div className='main'>
            < Sidebar/>
            <RightContent/>

        </div>
    );
}

export default Main;