import React, { useContext, useEffect } from "react";
import { useForceUpdate } from "../hooks/useForceUpdate";

const MyReactReduxContext = React.createContext(null);

export function useMySelector(selectorFn) {
  const store = useContext(MyReactReduxContext);
  return selectorFn(store.getState());
}

export function useMyDispatch(){
    const store = useContext(MyReactReduxContext);
    return store.dispatch;
}

export function MyProvider({ children, store }) {
  const forceUpdate = useForceUpdate();
  useEffect(()=>{
    store.subscribe(()=>{
      forceUpdate();
    })
  },[])
  
  return (
    <MyReactReduxContext.Provider value={{...store}}>
      {children}
    </MyReactReduxContext.Provider>
  );
}

export function myConnect(mapStateToProps,mapDispatchToProps){
  return function(WrappedComponent){
    return class NewComponent extends React.Component {
      static contextType = MyReactReduxContext;
      render(){
        const {getState, dispatch} = this.context;
        const mapStateProps = mapStateToProps(getState());
        const mapDisaptchProps = mapDispatchToProps(dispatch);
        return <WrappedComponent {...this.props}{...mapStateProps}{...mapDisaptchProps}/>
      }
    }
  }
}
