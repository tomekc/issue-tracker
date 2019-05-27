import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import Moment from "moment";

export default class App extends Component {
    state = { username: null };

    componentDidMount() {
        fetch("/api/getUsername")
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    render() {
        const { username } = this.state;

        var a = Moment('2016-01-01'); 
        var b = a.add(1, 'week'); 

        const date = b.format();
        return (
            <div>
                {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading... please wait!</h1>}
                <p>{date}</p>
                <img src={ReactImage} alt="react" />
            </div>
        );
    }
}
