import "./App.css";
import { useEffect, Suspense } from "react";
import AllEvents from "./components/AllEvents/AllEvents";
import SelectedEvents from "./components/SelectedEvents/SelectedEvents";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/master/action.creator";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.master);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Suspense fallback="Loading..">
    <div className="App">
      <AllEvents className="section" gridStyle="events-grid"/>
      <SelectedEvents className="section" gridStyle="events-grid"/>
      <Spinner show={isLoading} />
      <ToastContainer position="top-center" theme="colored" />
    </div>
    </Suspense>
  );
}

export default App;
