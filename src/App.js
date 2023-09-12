import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import './App.css';
import BusRoutes from './Pages/BusRoutes/BusRoutes';
import Details from './Pages/Details/Details';
import BookedTickets from './Pages/BookedTickets/BookedTickets';
import Contactus from './Pages/Contactus/Contactus';
import MyBusTickets from './Pages/MyBusTickets/MyBusTickets';
import About from './Pages/About/about';

function App() {
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filldetails" element={<Details />} />
          <Route path="/Busroutes" element={<BusRoutes />} />
          <Route path="/bookedtickets" element={<BookedTickets/>} />
          <Route path='/mybustickets' element={<MyBusTickets />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
