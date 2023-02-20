import "./App.css";
import { useState, useEffect } from "react";
import AllEvents from "./components/AllEvents/AllEvents";
import SelectedEvents from "./components/SelectedEvents/SelectedEvents";

function App() {
  const [data, setData] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([])
  const selectionHandler = (sportsEvent) => {
    setSelectedEvents(prev => [...prev,sportsEvent])
  }
  useEffect(() => {
    fetch("https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <div className="App">
      <AllEvents data={data} className="section" onSelectionChange={selectionHandler}/>
      <SelectedEvents className="section" data={selectedEvents}/>
    </div>
  );
}

export default App;
