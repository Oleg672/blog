import React from 'react';
import Navigation from './Navigation';
import RightContent from './RightContent';
import Sidebar from './Sidebar';
import Media from 'react-media';

function Main() {
    const [sidebarOpened, setSidebarOpened] = React.useState(false);
    return (
        <div className='main'>
            <Media query="(max-width: 425px)" render={() =>
                (
                    sidebarOpened ? <Sidebar /> : null
                )}
            />
            <Media query="(min-width: 1024px)" render={() =>
                (
                     <Sidebar />
                )}
            />
           {/* {sidebarOpened ? <Sidebar /> : null} */}
            <div className='rightContentWrap'>
                <Navigation onClickGamburger= {() => setSidebarOpened(!sidebarOpened) }/>
                <RightContent />
            </div>


        </div>
    );
}

export default Main;