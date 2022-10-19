import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Pages />
     <Category/>
     </BrowserRouter>
    </div>
  );
}

export default App;
