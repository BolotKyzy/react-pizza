import React from "react";
import {Header} from './components'
import {Route, Routes} from "react-router-dom";
import { Home, Cart} from './pages';
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchPizzas} from "./redux/actions/pizzas";

function App() {


  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/cart" element = {<Cart/>} />
            </Routes>
        </div>
      </div>

  );
}

export default App;
