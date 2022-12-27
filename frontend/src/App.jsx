import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useRouteError
}
from "react-router-dom";

import Layout from "./scenes/layout";
import './App.css'

function ErrorBoundary(){
  let error=useRouteError();

  return <h2>{`Oops! ${error} `}</h2>
}

export default function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>

        {/* declare scene routes */}



      </Route>
    )
  )
  return (
    
    <RouterProvider router={router} />
  )
}


