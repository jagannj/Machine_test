
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ListingMachines from "./ListingMachines";
import ListingShips from "./ListingShips";
import ListingLaunches from "./ListingLaunches"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/listingmachines" element={<ListingMachines />} />
          <Route path="/ListingShips" element={<ListingShips />} />
          <Route path="/listinglaunches" element={<ListingLaunches />} />
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
