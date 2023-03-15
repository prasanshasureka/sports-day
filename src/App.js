import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/master/action.creator";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner/Spinner";
import AllEvents from "./components/AllEvents/AllEvents";
import SelectedEvents from "./components/SelectedEvents/SelectedEvents";
import Error from "./components/Error/Error";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.master);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isLoading) return <Spinner show={isLoading} />;
  if (error) return <Error/>
  return (
    <div className="App">
      <AllEvents />
      <SelectedEvents />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;
