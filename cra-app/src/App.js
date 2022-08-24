import logo from './logo.svg';
import './App.css';
import CounterFn from './components/CounterFn';
import BuyStockFn from './components/BuyStock/BuyStockFn';
import React from 'react'


const pageInfo = [
  {
    pageName: "CounterFn",
    pageComponent: CounterFn
  }, {

    pageName: "BuyStockFn",
    pageComponent: BuyStockFn
  }
]

function App() {
  const [curPage, setCurPage] = React.useState(pageInfo[1])

  const renderPage = () => {
    const CurrentPageComponent = curPage.pageComponent;
    return <CurrentPageComponent />
  }

  const handleChangePage = (event, nextPage) => {
    event.preventDefault()
    setCurPage(nextPage)
  }

  return (
    <div className="App">
      <header className="App__header">
        <nav>
          {
            pageInfo.map((page, index) => <a href={`./${page.pageName}`} onClick={(e) => handleChangePage(e, page)} key={page.pageName}>{page.pageName}</a>)
          }
        </nav>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
