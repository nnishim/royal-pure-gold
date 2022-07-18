import {React, useState} from "react";
import "./App.css";
import {WrapperSC} from './uikit/WrapperSC'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'
import ChatMenu from './components/ChatMenu/ChatMenu'


function App() {
  const [tableCount, setTableCount] = useState(null)

  return (
    <>
      <WrapperSC>
        <Header/>
        <Search/>
        <Table setTableCount={setTableCount}/>
        <Footer/>
      </WrapperSC>
    </>
  );
}

export default App;
