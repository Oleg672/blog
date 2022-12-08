import React, { Component } from 'react';
import AddMessage from './AddMessage';
import PictureStoty from './PictureStoty';

class RightContent extends Component {
    render() {
        return (
            <div className="main-content">
                <PictureStoty />
                <AddMessage />
            </div>


        );
    }
}

export default (RightContent);