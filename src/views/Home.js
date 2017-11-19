import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'element-react';

import { INSTA_API } from '../api.js';


export class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            oauth_url: ''
        }
    }

    render() {
        return (
            <div className="container container--body">

                <div className="home-card card card--box">
                    <img className="home-card__icon" src="dist/assets/dice.svg" />
                    <h1> RaffleRoll </h1>
                    <h3 className="home-card__subtitle"> A tool to pick Instagram raffle winners </h3>
                    <a href={this.state.oauth_url}>
                        <Button 
                            className="home-card__btn"
                            type="primary">
                            Connect to Instagram
                        </Button>
                    </a>
                </div>
            </div>
        )
    }

    componentWillMount() {
        let url = INSTA_API.get_oauth_url();
        this.setState({ oauth_url: url });
    }

}