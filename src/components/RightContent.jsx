import React, { Component } from 'react';
import AddMessage from './AddMessage';
import Articles from './MyArticles/Articles';
import PictureStoty from './PictureStoty';

function RightContent(props) {
    return (
        <>
            <PictureStoty />
            <AddMessage />
            <Articles />
        </>
    );
}

export default RightContent;
