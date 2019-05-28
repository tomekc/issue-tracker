import React from 'react';

function Issue({model}) {
    return (<div className='card issue-card'>
        <div className='card-content'>
            <div className='media-content'>
                <p className='title is-4'>{model.title}</p>
                <p className='subtitle is-6'>#{model.id}</p>
            </div>
            <div className='content'>
                {model.description}
                <time>{model.created_at}</time>
            </div>
        </div>

    </div>);
}

export default Issue;