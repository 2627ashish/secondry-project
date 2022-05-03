import React from "react";
import '../Styles/about.css';
import { withRouter } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [],
            image: ''
        }
    }
    componentDidMount() {
        sessionStorage.clear();
        axios({
            method: 'GET',
            url: 'http://localhost:9992/about',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            this.setState({ content: response.data.about })
        })
            .catch(err => console.log(err));
    }
    handleNavigatehome = () => {
        this.props.history.push(`/`);
    }
    render() {
        const { content, image } = this.state;
        return (
            <div>
                <div className="container">
                <div className="background font">
                    <div className="logo ">
                        <a onClick={this.handleNavigatehome}><img src="./Assets/logo-roar-bikes.png" alt="logo supposed" /></a>
                    </div>
                    <div>{content.map(item => {
                        return item.content;
                    })}</div>
                </div>
            </div>
            <div className="container">
                <img src="./Assets/tyre.jpg" alt=""height="350" width="100%"/>
            </div>
            </div>
        )
    }
}

export default withRouter(About);