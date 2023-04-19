import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout, { loader } from "./components/Layout";
import Provider from "./components/Provider";
import Locations from "./components/Locations";
import Destination from "./components/Destination";

function App() {
  const elements = createRoutesFromElements(
    <Route path="/" loader={loader} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=":countryId" element={<Locations />} />
      <Route path="destination/:id" element={<Destination />} />
    </Route>)
  const routes = createBrowserRouter(elements)
  return (
    <Provider>
      <RouterProvider router={routes} />
    </Provider >

  );
}

export default App;
