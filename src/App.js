import "./App.css";
import { useEffect } from "react";
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
    <div className="App">
      <AllEvents className="section" />
      <SelectedEvents className="section" />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;
