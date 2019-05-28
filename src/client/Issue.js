import React from "react";
import StateTag from "./StateTag";
import StateSwitcher from "./StateSwitcher";
import Moment from 'moment';

function Issue({ model, onChangeState }) {

    let date = Moment(model.created_date).format('MMMM Do YYYY, hh:mm');

    return (
        <div className="card issue-card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{model.title}</p>
                        <p className="subtitle is-6">#{model.id}</p>
                    </div>
                    <div className="media-right">
                        <StateTag state={model.state} />
                    </div>
                </div>
                <div className="content">
                    {model.description}
                    <time>{model.created_at}</time>
                </div>                
                <StateSwitcher id={model.id} currentState={model.state} onChange={onChangeState} />
                <div><b>Reported:</b> {date}</div>
            </div>
        </div>
    );
}

export default Issue;
