import Navbar from "./componets/Navbar";
import Topbar from "./componets/Topbar";
import Cards from "./componets/Cards";
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div class="main">
          <Topbar />
          <Cards />
          {/*<Outlet />*/}
        </div>
      </div>
    </div>
  )
}

export default App
