import "./App.css";
import { useEffect } from "react";
import AllEvents from "./components/AllEvents/AllEvents";
import SelectedEvents from "./components/SelectedEvents/SelectedEvents";
import { useDispatch } from "react-redux";
import { getData } from "./store/master/action.creator";

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
    </div>
  );
}

export default App;
