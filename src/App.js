import "./App.css";
import {Routes,Route} from "react-router-dom";
import Header from "./components/header";
import CurrentWeather from "./pages/currentWeather";

function App(){
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<CurrentWeather/>}/>
      <Route path="/current-weather" element={<CurrentWeather/>}/>
      <Route path="/forecast" element={<>Hi</>}/>

    </Routes>
    </>
  );
}
export default App;