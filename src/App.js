import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/home/Home";
import RoomListing from "./components/room/RoomListing";
import AddRoom from './components/room/AddRoom';
import ExistingRooms from './components/room/ExistingRooms';
import EditRoom from './components/room/EditRoom';
import Admin from "./components/admin/Admin";
import NotFound from './components/common/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RoomListing" element={<RoomListing />} />
            <Route path="/AddRoom" element={<AddRoom />} />
            <Route path="/ExistingRooms" element={<ExistingRooms />} />
            <Route path="/EditRoom/:roomId" element={<EditRoom />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
