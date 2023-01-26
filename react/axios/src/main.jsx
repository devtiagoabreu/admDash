import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRoute, RouterProvider, Route } from "react-router-dom";
// PAGES
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";
import './index.css'

const router = createBrowserRoute([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
