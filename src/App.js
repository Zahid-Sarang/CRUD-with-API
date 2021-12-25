import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/pages/Home";
import Edit from "./components/student/Edit";
import View from "./components/student/View";

function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<Home />} /> 
         <Route exact path="/view/1" element={<View/>} /> 
         <Route exact path="/edit/1" element={<Edit />} /> 
       </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
