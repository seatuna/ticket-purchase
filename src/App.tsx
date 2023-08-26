import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventList } from "./EventList";
import { Checkout } from "./Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EventList />,
  },
  {
    path: "/checkout/:eventId",
    element: <Checkout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
