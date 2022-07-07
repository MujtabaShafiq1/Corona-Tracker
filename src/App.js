import { useEffect, useState } from 'react';

import { fetchData } from "./Api/Api"
import CountryPicker from './components/Country/CountryPicker';
import ChartDisplay from './components/Chart/Chart'
import Cards from "./components/Cards/Cards"
import image from "./assets/image.png"

import './App.css';

function App() {

  const [globalData, setGlobalData] = useState([])
  const [country, setCountry] = useState("")

  useEffect(() => {
    async function fetchAll() {
      const data = await fetchData();
      setGlobalData(data)
    }
    fetchAll();
  }, [])


  const handleCountryChange = async (ctry) => {
    const data = await fetchData(ctry);
    setGlobalData(data);
    setCountry(ctry);
  }

  return (
    <>
      <div className="container">
        <img src={image} alt="" />
        <Cards data={globalData} country={country}/>
        <CountryPicker handleCountryChange={handleCountryChange} />
        <ChartDisplay data={globalData} country={country} styles={{ width: "100%" }} />
      </div>
    </>
  );
}

export default App;
