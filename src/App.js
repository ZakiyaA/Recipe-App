import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import BackToHome from "./components/BackToHome";
import logo from "../src/assets/images/logo.png"


function App() {
  return (
    <>
      <img src={logo} height='150' margin='50%'/>
      <div className="App">
        <BrowserRouter>
          <BackToHome/>
          <Search/>
          <Category/>
          <Pages/>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
