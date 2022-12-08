import React from 'react';
import Navigation from './Navigation';
import RightContent from './RightContent';
import Sidebar from './Sidebar';

function Main(props) {
    return (
        <div className='main'>
            <Sidebar />
            <div className='rightContentWrap'>
                <Navigation />
                <RightContent />
            </div>


        </div>
    );
}

export default Main;