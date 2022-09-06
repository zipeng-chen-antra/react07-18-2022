import logo from "./logo.svg";
import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFn from "./components/CounterFn";
import BuyStockFn from "./components/BuyStock/BuyStockFn";
import BuyStockClass from "./components/BuyStock/BuyStockClass";
import StockAmount from "./components/StockAmount/StockAmount";
import React, { useEffect } from "react";
import MyReactReduxCounterClass from "./components/MyReactReduxCounterClass";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MyRoute, MyLink, MyBrowserRouter } from './MyReactRouter/MyReactRouter'

const pageInfo = [
  {
    pageName: "CounterFn",
    pageComponent: CounterFn,
  },
  {
    pageName: "CounterClass",
    pageComponent: CounterClass,
  },
  {
    pageName: "MyReactReduxCounterClass",
    pageComponent: MyReactReduxCounterClass
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn,
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass,
  },

];

function App() {
  const [curPage, setCurPage] = React.useState(pageInfo[1]);

  const renderPage = () => {
    const CurrentPageComponent = curPage.pageComponent;
    return <CurrentPageComponent test="patrick" />;
  };

  const handleChangePage = (event, nextPage) => {
    event.preventDefault();
    setCurPage(nextPage);
  };

  return (
    <MyBrowserRouter>
      <div className="App">
        <header className="App__header">
          <nav>
            <div>
              "Stock":
              <StockAmount />
            </div>

            {/* {pageInfo.map((page, index) => (
              <a
                href={`./${page.pageName}`}
                onClick={(e) => handleChangePage(e, page)}
                key={page.pageName}
              >
                {page.pageName}
              </a>
            ))} */}
            {
              pageInfo.map((page, index) => {
                return <MyLink key={page.pageName} to={`/${page.pageName}`}>{page.pageName}</MyLink>
              })
            }
          </nav>
        </header>
        {/* {renderPage()} */}
        {
          <>
            <MyRoute exact path="/CounterFn">
              <CounterFn />
            </MyRoute>
            <MyRoute exact path="/CounterClass">
              <CounterClass />
            </MyRoute>
            <MyRoute exact path="/">
              <h1>Home</h1>
            </MyRoute>
          </>
        }
      </div>
    </MyBrowserRouter>
  );
}

export default App;
