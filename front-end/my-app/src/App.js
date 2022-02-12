import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //Reactstrap
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import MainNav from './navigate/MainNav';
import Routers from './routes/Routers';
import { createUserAC } from "./store/auth/actions";
import { useDispatch } from "react-redux";


function App() {
  //
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/auth/isAuth");
      const data = await res.json();

      if(data !== null) {
        dispatch(createUserAC(data));
      }
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MainNav />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
