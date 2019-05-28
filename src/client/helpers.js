/**
 * Returns copy of given array where certin element is merged with provided 'appendix'.
 * 
 * @param {*} tab 
 * @param {*} key 
 * @param {*} value 
 * @param {*} appendix 
 */
export function modifyElement(tab, key, value, appendix) {
    return tab.map( e => {
        if (e[key] === value) {
            return {...e, ...appendix};
        } else {
            return e;
        }
    });
}

