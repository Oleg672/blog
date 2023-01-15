import React from 'react';
import Navigation from './Navigation';
import RightContent from './RightContent';
import Sidebar from './Sidebar';
import Media from 'react-media';
import Works from './MyWorks/Works';

function Main() {
    const [sidebarOpened, setSidebarOpened] = React.useState(false);
    const [worksOpened, setWorksOpened] = React.useState(false);

    return (
        <div className='main'>
            <Media query="(max-width: 425px)" render={() =>
            (
                sidebarOpened ? <Sidebar onClickMyWorks={() => setWorksOpened(!worksOpened)} /> : null
            )}
            />
            <Media query="(min-width: 1024px)" render={() =>
            (
                <Sidebar onClickMyWorks={() => setWorksOpened(!worksOpened)} />
            )}
            />
            {/* {sidebarOpened ? <Sidebar /> : null} */}
            <div className='rightContentWrap'>
                <Navigation sidebarOpened onClickGamburger={() => setSidebarOpened(!sidebarOpened)} />
                <div className="main-content">
                    {worksOpened ? <Works /> : <RightContent />}</div>
            </div>


        </div>
    );
}

export default Main;