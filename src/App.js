import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import { Wrapper } from "./uikit/WrapperSC";

function App() {
  return (
    <Wrapper>
      <Header />
      <Search/>
      <Table/>
    </Wrapper>
  );
}

export default App;
