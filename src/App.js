import {React, useState} from "react";
import "./App.css";
import {WrapperSC} from './uikit/WrapperSC'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'
import ChatMenu from './components/ChatMenu/ChatMenu'
import {Route, Routes} from "react-router-dom";
import SaleForm from "./components/SaleForm/SaleForm";
import NewsMenu from "./components/NewsMenu/NewsMenu";
import BankingMenu from "./components/BankingMenu/BankingMenu";


function App() {
  const [tableCount, setTableCount] = useState(null)

  return (
    <>
      <WrapperSC>
        <Header/>
        <Search/>
        <Table setTableCount={setTableCount}/>
        <Routes>
          <Route path="/stock" element={<Footer/>}/>
          <Route path="/fonds" element={''}/>
        </Routes>
        {/*<Routes>*/}
        {/*  <Route path="sale" element={<SaleForm/>}/>*/}
        {/*  <Route path="chat" element={<ChatMenu/>}/>*/}
        {/*  <Route path="news" element={<NewsMenu/>}/>*/}
        {/*  <Route path="bank/*" element={<BankingMenu/>}/>*/}
        {/*</Routes>*/}
      </WrapperSC>
    </>
  );
}

export default App;
