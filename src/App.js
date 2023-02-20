import "./App.css";
import { useEffect, Suspense } from "react";
import AllEvents from "./components/AllEvents/AllEvents";
import SelectedEvents from "./components/SelectedEvents/SelectedEvents";
import { useDispatch } from "react-redux";
import { getData } from "./store/master/action.creator";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.master);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Suspense fallback="Loading..">
    <div className="App">
      <AllEvents className="section" gridStyle="events-grid"/>
      <SelectedEvents className="section" gridStyle="events-grid"/>
      <ToastContainer position="top-center" theme="colored" />
    </div>
    </Suspense>
  );
}

export default App;
