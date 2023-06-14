import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  var pSize = 9; // Number of NewsItems in every page. 
  let apiKey = process.env.REACT_APP_NEWS_API;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar /> <News apiKey={apiKey} key='general' pageSize={pSize} category='general' /></>,
    },
    {
      path: "/business",
      element: <><NavBar /><News apiKey={apiKey} key='business' pageSize={pSize} category='business' /></>
    },
    {
      path: "/entertainment",
      element: <><NavBar /><News apiKey={apiKey} key='entertainment' pageSize={pSize} category='entertainment' /></>
    },
    {
      path: "/general",
      element: <><NavBar /><News apiKey={apiKey} key='general' pageSize={pSize} category='general' /></>
    },
    {
      path: "/health",
      element: <><NavBar /><News apiKey={apiKey} key='health' pageSize={pSize} category='health' /></>
    },
    {
      path: "/science",
      element: <><NavBar /><News apiKey={apiKey} key='science' pageSize={pSize} category='science' /></>
    },
    {
      path: "/sports",
      element: <><NavBar /><News apiKey={apiKey} key='sports' pageSize={pSize} category='sports' /></>
    },
    {
      path: "/technology",
      element: <><NavBar /><News apiKey={apiKey} key='technology' pageSize={pSize} category='technology' /></>
    }
  ]);

  return(
      <RouterProvider router={router} />         
    );
}

export default App;
