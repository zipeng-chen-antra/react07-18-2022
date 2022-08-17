import React from 'react';


const hooks = {
    state: null,
    firstCall: true
}



function useState(init) {
    let state = hooks.firstCall ? init : hooks.state
    hooks.firstCall = false

    function setState(newState) {

        if (typeof newState === 'function') {
            hooks.state = newState(state);
        } else {
            hooks.state = newState
        }
        console.log(hooks)
        let curReactElement = hooks.render(hooks.preProps)
        console.log("curVDOM", curReactElement);
        console.log("preVDOM", hooks.preReactElement);
        // React is using diffing algrithm to find the diff between curVDOM and preVDOM
        // Use fiber schedule to find the best way to update React DOM
        update(curReactElement, hooks.parentDomElement);
    }
    return [state, setState]
}
class Component {
    constructor(props) {
        this.props = props
    }

    setState(newState) {
        setTimeout(() => {
            if (typeof newState === 'function') {
                this.state = {
                    ...this.state,
                    ...newState(this.state)
                }

            } else {
                this.state = {
                    ...this.state,
                    ...newState
                };
            }
            let curReactElement = this.render()
            console.log("curVDOM", curReactElement);
            console.log("preVDOM", this.preReactElement);
            // React is using diffing algrithm to find the diff between curVDOM and preVDOM
            // Use fiber schedule to find the best way to update React DOM
            update(curReactElement, this.parentDomElement);
        }, 0)
    }
}




export const MyReact = {
    Component,
    useState
}



const PROPS_KEYS = {
    CHILDREN: 'children',
    EVENT_START_WITH: 'on'
}


const didMountComponentStack = [] // push to add | pop to pop


// render element into domElement
function render(ReactElement, domElement) {
    // create Dom element based on ReactElement
    const curDom = creatDomElement(ReactElement, domElement)
    // commit 
    commit(curDom, domElement)
}

function update(ReactElement, domElement) {
    // create Dom element based on ReactElement
    const curDom = creatDomElement(ReactElement, domElement)
    // commit 
    commit(curDom, domElement, true)
}

function isClassComponent(type) {
    return type.prototype instanceof MyReact.Component
}

function isFunctionComponent(type) {
    return !isClassComponent(type) && typeof type === 'function'
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
        console.log("domElement", domElement)
        curInstance.parentDomElement = domElement;

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
        curInstance.preReactElement = curElement;
        didMountComponentStack.push(curInstance)
        curDom = creatDomElement(curElement)
    } else if (isFunctionComponent(type)) {
        const curElement = type(props)
        hooks.preVDOM = curElement;
        hooks.render = type
        hooks.preProps = props;
        hooks.parentDomElement = domElement
        curDom = creatDomElement(curElement)
    }
    else {
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
                } else if (typeof curPropValue === 'object') {
                    creatDomElement(curPropValue, curDom)
                }
                else {
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
    }

    return curDom
}

function commit(childElement, parentElement, isUpdating = false) {
    if (isUpdating) {
        parentElement.replaceChild(childElement, parentElement.childNodes[0]);
    } else {
        parentElement.append(childElement)
        while (didMountComponentStack.length > 0) {
            let curFn = didMountComponentStack.pop().componentDidMount;
            if (curFn) {
                curFn()
            }
        }
    }

}

const MyReactDOM = {
    render
}

export default MyReactDOM