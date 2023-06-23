import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Addblog from "./component/Addblog";
import Dashboard from "./component/Dashboard";
import About from "./component/About";
import Services from "./component/Services";
import List from "./component/List";
import { ToastContainer } from 'react-toastify';
import Error from "./component/Error";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/addblog' element={ <Addblog /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/list' element={ <List /> } />
          <Route path='/error' element={ <Error /> } />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
