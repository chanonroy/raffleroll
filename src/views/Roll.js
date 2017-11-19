import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Roll extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: false,
            access_token: '',
            comments: []
        }
    }

    render() {
        return (
         <div> Hello World </div>   
        )
    }

    componentWillMount() {
        // Grab access token from the router
    }

    handleSubmit() {

        // Get total number of comments and media_id

        // Get initial comments

    }

}