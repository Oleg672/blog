import React, { Component } from 'react';
import AddMessage from './AddMessage';
import Articles from './Articles';
import ArticlesFooterBtn from './ArticlesFooterBtn';
import PictureStoty from './PictureStoty';

class RightContent extends Component {
    render() {
        return (
            <div className="main-content">
                <PictureStoty />
                <AddMessage />
                <Articles />
                <ArticlesFooterBtn />
            </div>


        );
    }
}

export default (RightContent);