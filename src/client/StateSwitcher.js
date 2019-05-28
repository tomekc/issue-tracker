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
        buttons.push(<a key='1' className='button is-small' onClick={makeOpen} >OPEN</a>);
    }
    if (currentState == 'OPEN' || currentState == 'PENDING') {
        buttons.push(<a key='2' className='button is-small' onClick={makeClosed}>CLOSE</a>);
    }
    return (
        <div>
            {buttons}
        </div>

    );
}

export default StateSwitcher;