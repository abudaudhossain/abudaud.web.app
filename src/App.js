import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import ContactUs from "./Pages/ContactUs/ContactUs/ContactUs";
import Portfolio from "./Pages/Portfolio/Portfolio/Portfolio";
import TopNavbar from "./Pages/Shared/TopNavbar/TopNavbar";



function App() {
  return (
    <main>
      <BrowserRouter>
        <TopNavbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          
        </Routes>

      </BrowserRouter>
    </main>
  );
}

export default App;
