import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/master/action.creator";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner/Spinner";
import AllEvents from "./components/AllEvents/AllEvents";
import SelectedEvents from "./components/SelectedEvents/SelectedEvents";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.master);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isLoading) return <Spinner show={isLoading} />;
  return (
    <div className="App">
      <AllEvents className="section" gridStyle="events-grid" />
      <SelectedEvents className="section" gridStyle="events-grid" />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;
