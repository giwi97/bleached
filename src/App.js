import React, {useState} from 'react';
const weatherapi = {

  key: "4fc99fa56dae5040518049ca5d5b2d7d",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

    if(evt.key == "Enter"){

      fetch(`${weatherapi.base}weather?q=${query}&units=metric&APPID=${weatherapi.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });

    }

  }

  const dateBuilder = (d) => {

    let months = ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednsday",
     "Thursday", "Friday", "Saturday"];

     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getYear();

    return `${day} ${date} ${month} ${year}`

  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" 
          placeholder="Search...." 
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">Colombo, SL</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            27°c
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
