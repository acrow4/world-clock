function updateTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );

    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );

    let seoulElement = document.querySelector("#seoul");
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }

  let cityName = timeZone.replace("_", " ").split("/")[1];
  let selectedTime = moment().tz(timeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${selectedTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${selectedTime.format(
            "hh:mm:ss"
          )} <small>${selectedTime.format("A")}</small></div>
        </div><a href="/">Start Over</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-dropdown");
citiesSelectElement.addEventListener("change", updateCity);
