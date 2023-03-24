import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Provider from "./components/Provider";
import Locations from "./components/Locations";
import Destination from "./components/Destination";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryId" element={<Locations />} />
          <Route path="/destination/:id" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
