import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import the page
import Login from "./component/Login";
import Home from "./component/Home";
import Users from "./component/Users";

function App() {
  const { movieid } = useParams();
  return (
    <div className="containerMovie">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
