import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"

import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Create from "./components/Create.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path=""
            element={<Home />}
          />
          <Route
            path="post/create"
            element={<Create />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
