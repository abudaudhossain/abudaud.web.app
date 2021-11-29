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
import Thanks from "./Pages/Thanks/Thanks";



function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/messageSend' element={<Thanks />} />

        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
