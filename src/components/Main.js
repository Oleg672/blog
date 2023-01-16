import React, { useContext } from 'react';
import Navigation from './Navigation';
import Home from './RightContent';
import Sidebar from './Sidebar';
import Media from 'react-media';
import Works from './MyWorks/Works';
import { SidebarContext } from '../providers/SidebarProvider';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Main() {
    const { Opened, setOpened } = useContext(SidebarContext)
    const [worksOpened, setWorksOpened] = React.useState(false);
    
    return (

        <div className='main'>
           
            <Media query="(max-width: 425px)" render={() =>
            (
                Opened ? <Sidebar onClickMyWorks={() => setWorksOpened(!worksOpened)} /> : null
            )}
            />
            <Media query="(min-width: 1024px)" render={() =>
            (
                <Sidebar onClickMyWorks={() => setWorksOpened(!worksOpened)} />
            )}
            />
            {/* {sidebarOpened ? <Sidebar /> : null} */}
            <div className='rightContentWrap'>
                <Navigation />
                <div className="main-content">
                    <BrowserRouter>
                        <Routes>

                            <Route path='/' element={<Home />} />
                            <Route path='Works' element={<Works />} />
                            {/* <Route exact path="" component={Works1}/> */}
                        </Routes>
                    </BrowserRouter>


                    {/* {worksOpened ? <Works /> : <RightContent />}</div> */}
                </div>

            </div>
        </div>
    );
}

export default Main;