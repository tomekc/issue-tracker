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

    onChangeState = (id, state) => {
        console.log(`Will change state of ${id} to ${state}`);

        let newState = this.state.issues.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    state: state
                };
            } else {
                return i;
            }
        });

        this.setState({ issues: newState });
        // TODO update UI only after succesful request

        fetch(`/api/issues/${id}/state`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ state: state })
        });
    };

    render() {
        const { issues } = this.state;

        return (
            <div className="columns">
                <div className="column is-half">
                    <div>
                        {issues.map(i => (
                            <Issue model={i} key={i.id} onChangeState={this.onChangeState} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
