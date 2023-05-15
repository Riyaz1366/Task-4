const url = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    for (const country of data) {
      if ("flags" in country) {
        const name = country.name.common;
        const region = country.region;
        const subregion = country.subregion;
        const population = country.population;
        const flagUrl = country.flags.svg;

        console.log("Country: " + name);
        console.log("Region: " + region);
        console.log("Subregion: " + subregion);
        console.log("Population: " + population);
        console.log("Flag URL: " + flagUrl);
        console.log("---------------------");
      }
    }
  } else {
    console.log("Error: " + xhr.status);
  }
};

xhr.send();

