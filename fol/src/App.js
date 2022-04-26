import React, { useEffect, useState } from "react";
import './card';
import './App.css';
import Card from "./card";

function App() {
  const [carddata, setCard] = useState([]);
  var resdata ;
  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches?limit=100";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
             resdata = await response.json();
            console.log(resdata);
            setCard(resdata);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);
 function handleLaunchyear(n){
     setCard(resdata.filter(n));
 }
  return (
    <div className="app"><h1>SpaceX Launch Programs</h1>
    <div className="mainbox">
    <h2 className="fil">Filters</h2>
<div className="Filters">
  
  <br></br>
  <p>Launch Year</p>
      <div className="filterrow"> <button className="btn" onClick={handleLaunchyear(2006)}>2006</button> <button className="btn">2007</button> </div>
      <button className="btn">2008</button>
      <button className="btn">2009</button>
      <button className="btn">2010</button>
      <button className="btn">2011</button>
      <button className="btn">2012</button>
      <button className="btn">2013</button>
      <button className="btn">2014</button>
      <button className="btn">2015</button>
      <button className="btn">2016</button>
      <button className="btn">2017</button>
      <button className="btn">2018</button>
      <button className="btn">2019</button>
      <button className="btn">2020</button>
      <br></br>
      <p><u>Successful Launcha</u></p>
      <button className="btn">TRUE</button>
      <button className="btn">FALSE</button>

      <br></br>
      <p>Successful Landing</p>
      <button className="btn">TRUE</button>
      <button className="btn">FALSE</button>

      </div>
        <div className="showCard">
      {carddata.map((person) => {
        
         return(
          <Card
          key={person.id}
          landSuccess = {person.rocket.first_stage.cores[0].landing_intent}
          flightNumber={person.flight_number}
          missionName={person.mission_name}
          missionId={person.mission_id}
          launchYear={person.launch_year}
          launchSuccess= {person.launch_success}
          imgUrl={person.links.mission_patch_small}
          />
         )
        
      })
      }
      </div>
      
</div>    <p>Developed BY : NIKHIL SINGH PARMAR</p></div>
  );
}

export default App;
