import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'element-react';

import { INSTA_API } from '../api.js';

export class Roll extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: false,
            media_url: 'BblGBaPAsQW',
            media_data: {},
            access_token: '',
            comments: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="container container--body">
                <h1> Hello </h1>
                <div> {this.state.access_token} </div>
                <Button onClick={() => this.handleSubmit()}> Get Media Data </Button>
            </div> 
        )
    }

    componentWillMount() {

        // Grab access token from url params
        let url = window.location.href;
        let token = url.split("access_token=")[1];
        this.setState({ access_token: token });

    }

    handleSubmit() {

        // Grab shortcode from URL

        // Get total number of comments and media_id
        INSTA_API.get_media_data(this.state.access_token, this.state.media_url)
            .then((response) => {

                let comment_count = response.data.data.count;
                let media_id = response.data.data.id;

                // user.id, user.full_name, user.profile_picture, 
                
                this.setState({
                    comment_count: comment_count,
                    media_id: media_id
                })
                
            }).catch((error) => {
                console.log(error);
            });

        // Get initial comments

    }

    getComments() {

        

    }

}