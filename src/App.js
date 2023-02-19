import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import BackToHome from "./components/BackToHome";


function App() {

  return (
    <div >
       <BrowserRouter>
       { }
         <BackToHome/>
         <Search/>
         <Category/>
         <Pages />
        
       </BrowserRouter>
    </div>
  );
}

export default App;
