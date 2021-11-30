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
import Details from "./Pages/Details/Details/Details";
import Blogs from "./Pages/Blogs/Blogs/Blogs";



function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/details' element={<Details />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/messageSend' element={<Thanks />} />

        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
