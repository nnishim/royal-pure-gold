import "./App.css";
import Footer from "./components/Footer/Footer";
import FooterInputField from "./components/FooterInputField/FooterInputField";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import { Wrapper } from "./uikit/WrapperSC";
import {Route, Routes ,Link} from 'react-router-dom';
import FooterItemText from "./components/FooterItemText/FooterItemText";
import { useState } from "react";
import Diagram from "./components/Diagram/Diagram";
import SaleForm from "./components/SaleForm/SaleForm";
import NewsMenu from "./components/NewsMenu/NewsMenu";


function App() {
  const [tableCount, setTableCount] = useState(null)
  
  return (
    <Wrapper>
      {/* <Header />
      <Search tableCount={tableCount}/>
      <Table setTableCount={setTableCount} />
      <Footer /> */}
      <NewsMenu/>
    </Wrapper>
  );
}

export default App;
