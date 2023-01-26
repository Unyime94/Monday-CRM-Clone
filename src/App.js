import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Ticket from "./pages/Ticket";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
          <Route
            path="/ticket/:id"
            element={<Ticket editMode={true} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
