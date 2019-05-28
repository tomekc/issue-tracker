import React from "react";


function StateSwitcher({id, currentState, onChange}) {

    let makeOpen = () => {
        onChange(id,'OPEN');
    }

    let makeClosed = () => {
        onChange(id,'CLOSED');
    }

    let buttons = [];
    if (currentState == 'PENDING') {
        buttons.push(<span className='button-row-element' key='1'><a  className='button is-small' onClick={makeOpen} >OPEN</a></span>);
    }
    if (currentState == 'OPEN' || currentState == 'PENDING') {
        buttons.push(<span className='button-row-element' key='2'><a  className='button is-small' onClick={makeClosed}>CLOSE</a></span>);
    }
    return (
        <div>
            {buttons}
        </div>

    );
}

export default StateSwitcher;