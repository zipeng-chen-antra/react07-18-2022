import React from 'react';

class Component {
    constructor(props) {
        this.props = props
    }

    setState() {
        console.log("SET STATE")
    }
}


export const MyReact = {
    Component
}



const PROPS_KEYS = {
    CHILDREN: 'children',
    EVENT_START_WITH: 'on'
}


const didMountComponentStack = [] // push to add | pop to pop


// render element into domElement
function render(ReactElement, domElement) {
    // create Dom element based on ReactElement
    const curDom = creatDomElement(ReactElement)
    // commit 
    commit(curDom, domElement)
}

function isClassComponent(type) {
    return type.prototype instanceof MyReact.Component
}


function isChildrenProp(key) {
    return key === PROPS_KEYS.CHILDREN
}
function isEventProp(key) {
    return key.startsWith(PROPS_KEYS.EVENT_START_WITH)
}

function creatDomElement(ReactElement, domElement) {
    const { type, props } = ReactElement;
    let curDom;
    if (isClassComponent(type)) {
        // mounting
        // constructor
        const curInstance = new type(props);
        // getDerivedStateFromProps
        let returned = type.getDerivedStateFromProps(curInstance.props, curInstance.state)
        if (returned !== null) {
            curInstance.state = {
                ...curInstance.state,
                ...returned
            }
        }
        // render
        const curElement = curInstance.render();
        didMountComponentStack.push(curInstance)
        curDom = creatDomElement(curElement, domElement)
    } else {
        curDom = document.createElement(type);

        Object.keys(props).forEach(key => {
            const curPropValue = props[key];
            if (isChildrenProp(key)) {
                if (Array.isArray(curPropValue)) {
                    curPropValue.forEach(child => {
                        if (typeof child !== 'object') {
                            curDom.append(document.createTextNode(child))
                        } else {
                            creatDomElement(child, curDom)
                        }
                    })
                } else {
                    curDom.append(document.createTextNode(curPropValue))
                }
            } else if (isEventProp(key)) {
                const eventType = key.substring(2).toLowerCase()
                curDom.addEventListener(eventType, curPropValue)
            }
            else {
                curDom[key] = curPropValue
            }
        })
    }


    if (domElement) {
        domElement.append(curDom)

    } else {
        return curDom
    }
}

function commit(childElement, parentElement) {
    parentElement.append(childElement)
    while (didMountComponentStack.length > 0) {
        let curFn = didMountComponentStack.pop().componentDidMount;
        if (curFn) {
            curFn()
        }
    }
}

const MyReactDOM = {
    render
}

export default MyReactDOM