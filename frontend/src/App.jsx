import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import {Layout} from "./scenes/barrel";
import {Login} from "./components/barrel"
import "./App.css";

function ErrorBoundary() {
  let error = useRouteError();

  return <h2>{`Oops! ${error} `}</h2>;
}

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
        
        <Route path="login" element={<Login />}/>
        
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
