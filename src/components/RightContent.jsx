import React, { Component } from 'react';
import AddMessage from './AddMessage';
import Articles from './Articles';
import ArticlesFooterBtn from './ArticlesFooterBtn';
import PictureStoty from './PictureStoty';

class RightContent extends Component {
    render() {
        return (
            <>
                <PictureStoty />
                <AddMessage />
                <Articles />
            </>


        );
    }
}

export default (RightContent);