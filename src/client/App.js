import React, { Component } from "react";
import "./app.css";
import "./bulma.css";
import Issue from "./Issue";

export default class App extends Component {
    state = {
        issues: []
    };

    componentDidMount() {
        fetch("/api/issues")
            .then(res => res.json())
            .then(issues => this.setState({ issues: issues }));
    }

    render() {
        const { issues } = this.state;

        return (
            <div className="columns">
                <div className="column is-half">
                    <div>
                        {issues.map(i => (
                            <Issue model={i} key={i.id} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
