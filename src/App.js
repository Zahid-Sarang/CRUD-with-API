import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/pages/Home";

function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<Home />} /> 
       </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
