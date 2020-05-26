import React from 'react';
const weatherapi = {

  key: "4fc99fa56dae5040518049ca5d5b2d7d",
  base: "https://api.openweathermap.org/data/2.5"

}

function App() {

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
          <input type="text" className="search-bar" placeholder="Search...." />
        </div>
        <div className="location-box">
          <div className="location">Colombo, SL</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
