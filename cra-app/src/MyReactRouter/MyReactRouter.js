import React from 'react';

const isMatch = (path, locationPath, exact) => {
    if (exact) {
        return locationPath === path
    } else {
        return locationPath.includes(path)
    }

}
const MyBrowserRouterContext = React.createContext(null);

export const MyBrowserRouter = ({ children }) => {
    const [_, forceUpdate] = React.useState(false)
    const Location = { ...window.location }
    const History = {
        push: (state, title, path) => {
            window.history.pushState(state, title, path)
            // update
            forceUpdate(pre => !pre)
        }
    }
    React.useEffect(() => {
        window.addEventListener('popstate', function (event) {
            // The URL changed...
            forceUpdate(pre => !pre)
        });

    }, [])

    return <MyBrowserRouterContext.Provider value={{ Location, History }}>
        {children}
    </MyBrowserRouterContext.Provider>
}

const useLocation = () => {
    const { Location } = React.useContext(MyBrowserRouterContext)
    return Location
}

const useHistory = () => {
    const { History } = React.useContext(MyBrowserRouterContext)
    return History
}


export const MyRoute = ({ exact, path, children }) => {
    const location = useLocation()
    if (isMatch(path, location.pathname, exact)) {
        return children
    } else {
        return null
    }
}

export const MyLink = ({ to, children }) => {
    console.log('update MyLink')
    const history = useHistory()
    const hanldeClick = (e) => {
        e.preventDefault()
        history.push({}, "", to)

    }
    return <a href={to} onClick={hanldeClick}> {children}</a>
}