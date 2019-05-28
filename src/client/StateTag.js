import React from "react";

function StateTag({ state }) {
    let color = "is-black";
    switch (state) {
        case "PENDING":
            color = "is-info";
            break;
        case "OPEN":
            color = "is-warning";
            break;
        case "CLOSED":
            color = "is-success";
            break;
    }
    let styleName = `tag ${color}`;
    
    return <span className={styleName}>{state}</span>;
}

export default StateTag;
