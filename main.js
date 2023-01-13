"use-strict";

// Access the HTML tags using DOM methods
let searchBtn = document.querySelector(".search-btn");
let countryInput = document.querySelector("#country-input");
let result = document.querySelector(".result");

// Load  country info func
function LoadCountryInfo() {
  let countryName = countryInput.value;

  // Loading while API laods
  result.innerHTML = `<h5>Data is Loading...</h5>`;

  // External API URL
  let countryURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  // Fetch API
  fetch(countryURL)
    .then((res) => res.json())
    .then((data) => {
      result.innerHTML = `
         <img src="${data[0].flags.svg}" class="flag-img" />
         <h2>${data[0].name.common}</h2>
         <div class="wrapper">
           <div class="data-wrapper">
            <h4>Capital: </h4>
            <span>${data[0].capital[0]}</span>
           </div>
         </div>
          <div class="wrapper">
           <div class="data-wrapper">
            <h4>Continent: </h4>
            <span>${data[0].continents[0]}</span>
           </div>
         </div>
          <div class="wrapper">
           <div class="data-wrapper">
            <h4>Population: </h4>
            <span>${data[0].population}</span>
           </div>
         </div>
          <div class="wrapper">
           <div class="data-wrapper">
            <h4>Currency: </h4>
            <span>${Object.keys(data[0].currencies)[0]} - ${
        data[0].currencies[Object.keys(data[0].currencies)].name
      }</span>
           </div>
         </div>

         <div class="wrapper">
           <div class="data-wrapper">
            <h4>Major Language(s): </h4>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(" , ")}</span>
           </div>
         </div>
        `;
    })
    .catch(() => {
      if (countryName.length == 0 || null) {
        result.innerHTML = `<h3>Input field cannot be empty.</h3>`;
      } else {
        result.innerHTML = `<h3>Please input a correct country name. Thanks</h3>`;
      }
    });
}


// Listen to event for country info
searchBtn.addEventListener("click", LoadCountryInfo);
