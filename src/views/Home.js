import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'element-react';

import { INSTA_API } from '../api.js';


export class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            oauth_url: '',
            test_url: '/roll?access_token=adsfsdaf343423849237dsf'
        }
    }

    render() {
        return (
            <div className="container container--body">

                <div className="home-card card card--box">
                    <img className="home-card__icon" src="dist/assets/dice.svg" />
                    <h1 className="home-card__title"> 
                        RaffleRoll 
                        <span className="home-card__badge"> BETA </span>
                    </h1>
                    <h3 className="home-card__subtitle"> A helpful tool to pick random comments for Instagram raffles </h3>
                    <Link to={this.state.test_url}>
                        <Button 
                            className="home-card__btn"
                            type="primary">
                            Connect to Instagram
                        </Button>
                    </Link>
                </div>
                <div className="sig"> 
                    Developed by <a 
                        target="_blank"
                        className="sig__link"
                        href="http://chanonroy.com"> 
                        Chanon Roy 
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