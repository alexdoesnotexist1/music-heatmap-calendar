import { useState, useEffect } from 'react'
import MonthlyCalendarHeatmap from "./MonthlyCalendarHeatmap";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/music_data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Music Calendar Heatmap</h1>
      <p>This is a heatmap calendar of the music I listened to this year! </p> 
      <p>I used tooltips to show how many songs I listened to each day. (Hover your mouse over the days and see what I listened to!)</p>
      <MonthlyCalendarHeatmap data={data} />
      <p>Source: <a href='https://www.last.fm/api'>last.fm</a></p>
    </div>
  );
}

export default App
