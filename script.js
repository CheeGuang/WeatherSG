// Define Constants
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Defining Weather Forecast Regions
const Towns = [
  "Tengah",
  "Western Islands",
  "Boon Lay",
  "Pioneer",
  "Jurong West",
  "Western Water Catchment",
  "Jurong East",
  "Choa Chu Kang",
  "Clementi",
  "Bukit Batok",
  "Tuas",
  "Jurong Island",
  "Jalan Bahar",
  "Lim Chu Kang",
  "Sembawang",
  "Sengkang",
  "Mandai",
  "Seletar",
  "Sungei Kadut",
  "Punggol",
  "Woodlands",
  "Yishun",
  "Novena",
  "Serangoon",
  "Central Water Catchment",
  "Bishan",
  "Ang Mo Kio",
  "Toa Payoh",
  "Bukit Panjang",
  "Bukit Timah",
  "City",
  "Southern Islands",
  "Kallang",
  "Queenstown",
  "Tanglin",
  "Sentosa",
  "Bukit Merah",
  "Changi",
  "Tampines",
  "Marine Parade",
  "Hougang",
  "Geylang",
  "Bedok",
  "Paya Lebar",
  "Pasir Ris",
  "Pulau Ubin",
  "Pulau Tekong",
];

// Defining Weather Icons Shorthand
var availableLegendList = [];
availableLegendList.push({ forecast: "fa", description: "Fair" });
availableLegendList.push({ forecast: "fn", description: "Fair" });
availableLegendList.push({ forecast: "fw", description: "Fair &amp; Warm" });
availableLegendList.push({
  forecast: "pc",
  description: "Partly Cloudy (Day)",
});
availableLegendList.push({
  forecast: "pn",
  description: "Partly Cloudy (Night)",
});
availableLegendList.push({ forecast: "cl", description: "Cloudy" });
availableLegendList.push({ forecast: "hz", description: "Hazy" });
availableLegendList.push({ forecast: "lh", description: "Slightly Hazy" });
availableLegendList.push({ forecast: "wd", description: "Windy" });
availableLegendList.push({ forecast: "lr", description: "Light Rain" });
availableLegendList.push({ forecast: "ra", description: "Moderate Rain" });
availableLegendList.push({ forecast: "hr", description: "Heavy Rain" });
availableLegendList.push({ forecast: "ps", description: "Passing Showers" });
availableLegendList.push({ forecast: "ls", description: "Light Showers" });
availableLegendList.push({ forecast: "sh", description: "Showers" });
availableLegendList.push({ forecast: "hs", description: "Heavy Showers" });
availableLegendList.push({ forecast: "tl", description: "Thundery Showers" });
availableLegendList.push({
  forecast: "ht",
  description: "Heavy Thundery Showers",
});
availableLegendList.push({
  forecast: "hg",
  description: "Heavy Thundery Showers with Gusty Winds",
});
availableLegendList.push({ forecast: "br", description: "Mist" });
availableLegendList.push({ forecast: "fg", description: "Fog" });
availableLegendList.push({ forecast: "sn", description: "Snow" });
availableLegendList.push({ forecast: "sh", description: "Showers" });
availableLegendList.push({ forecast: "ss", description: "Snow Showers" });
availableLegendList.push({ forecast: "dr", description: "Drizzle" });
availableLegendList.push({ forecast: "oc", description: "Overcast" });
availableLegendList.push({ forecast: "su", description: "Sunny" });
availableLegendList.push({ forecast: "wr", description: "Windy, Rain" });
availableLegendList.push({ forecast: "wf", description: "Windy, Fair" });
availableLegendList.push({ forecast: "ws", description: "Windy, Showers" });
availableLegendList.push({ forecast: "wc", description: "Windy, Cloudy" });
availableLegendList.push({ forecast: "sw", description: "Strong Winds" });
availableLegendList.push({ forecast: "sr", description: "Strong Winds, Rain" });
availableLegendList.push({
  forecast: "sk",
  description: "Strong Winds, Showers",
});

// =======================================================================================================
// =========================================== Header Logic ==============================================
// =======================================================================================================

var d = new Date();
var currentHour = d.getHours();
var currentMinutes = d.getMinutes();
main();
setInterval(function programRepeater() {
  d = new Date();
  console.log("Current Minute:", currentMinutes, "New Minute:", d.getMinutes());

  if (currentMinutes != d.getMinutes()) {
    main();
  }
}, 1000);

function programRepeater() {
  console.log("Check Count");
  if (currentMinutes != d.getMinutes()) {
    main();
  }
}

function main() {
  // =======================================================================================================
  // =========================================== Header Logic ==============================================
  // =======================================================================================================

  // Getting Current Time
  const d = new Date();

  const currentHour = d.getHours();
  currentMinutes = d.getMinutes();

  function getCurrentTime(hours, mins) {
    var returnHour = "";
    var returnMins = mins;
    var suffix = "";
    if (hours > 12) {
      returnHour = `${hours - 12}`;
      suffix = "pm";
    } else {
      returnHour = hours;
      suffix = "am";
    }
    if (returnMins.toString().length === 1) {
      returnMins = `0${mins}`;
    } else {
      returnMins = mins;
    }
    return returnHour + ":" + returnMins + suffix;
  }

  // Updating Date & Time
  updateDateTime();
  function updateDateTime() {
    document.getElementById("date-time").textContent = `${
      dayNames[d.getDay()]
    } | ${d.getDate()} ${
      monthNames[d.getMonth()]
    } ${d.getFullYear()} | ${getCurrentTime(currentHour, currentMinutes)}`;
  }

  // =======================================================================================================
  // ======================================= 2-Hour Outlook Logic ==========================================
  // =======================================================================================================

  // Return Directory of Weather Icons
  function findImage2h(weather) {
    function alignPartlyCloudyDay() {
      document.getElementById("img-2h").style.marginTop = "30px";
      document.getElementById("img-2h").style.marginBottom = "-15px";
      document.getElementById("div-text-2h").style.marginTop = "-42px";
      document.getElementById("left-section").style.gap = "0px";
    }
    function alignPartlyCloudyNight() {
      document.getElementById("img-2h").style.marginTop = "20px";
      document.getElementById("img-2h").style.marginBottom = "-10px";
      document.getElementById("div-text-2h").style.marginTop = "-11px";
      document.getElementById("left-section").style.gap = "5px";
    }
    function alignNone() {
      document.getElementById("img4-24h").style.marginTop = "15px";
      document.getElementById("img4-24h").style.marginBottom = "19px";
      document.getElementById("img4-24h").style.height = "12vh";
      document.getElementById("div-text-2h").style.marginTop = "-11px";
      document.getElementById("left-section").style.gap = "5px";
    }

    switch (weather) {
      case "Fair (Day)":
        alignPartlyCloudyNight();
        return ["weatherIcons-2h-24h/day-fair-warm.svg", "Fair"];
      case "Fair (Night)":
        alignPartlyCloudyNight();
        return ["weatherIcons-2h-24h/night-fair.svg", "Fair"];
      case "Fair & Warm":
        alignPartlyCloudyNight();
        return ["weatherIcons-2h-24h/day-fair-warm.svg", "Fair & Warm"];
      case "Partly Cloudy (Night)":
        alignPartlyCloudyNight();
        return ["weatherIcons-2h-24h/night-partly-cloudy.svg", "Partly Cloudy"];
      case "Partly Cloudy (Day)":
        alignPartlyCloudyDay();
        return ["weatherIcons-2h-24h/day-partly-cloudy.svg", "Partly Cloudy"];
      case "Cloudy":
        return ["weatherIcons-2h-24h/cloudy.svg", "Cloudy"];
      case "Hazy":
        return ["weatherIcons-2h-24h/hazy-slightly-hazy.svg", "Hazy"];
      case "Slightly Hazy":
        return ["weatherIcons-2h-24h/hazy-slightly-hazy.svg", "Hazy"];
      case "Windy":
        return ["weatherIcons-2h-24h/windy.svg", "Windy"];
      case "Mist":
        return ["weatherIcons-2h-24h/mist.svg", "Mist"];
      case "Light Rain":
        return [
          "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg",
          "Light Rain",
        ];
      case "Moderate Rain":
        return [
          "weatherIcons-2h-24h/moderate-rain-showers.svg",
          "Moderate Rain",
        ];
      case "Heavy Rain":
        return ["weatherIcons-2h-24h/heavy-rain-showers.svg", "Heavy Rain"];
      case "Passing Showers":
        return [
          "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg",
          "Passing Showers",
        ];
      case "Light Showers":
        return [
          "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg",
          "Light Showers",
        ];
      case "Showers":
        return ["weatherIcons-2h-24h/moderate-rain-showers.svg", "Showers"];
      case "Heavy Showers":
        return ["weatherIcons-2h-24h/heavy-rain-showers.svg", "Heavy Showers"];
      case "Thundery Showers":
        return ["weatherIcons-2h-24h/thundery-showers.svg", "Thundery Showers"];
      case "Heavy Thundery Showers":
        return [
          "weatherIcons-2h-24h/heavy-thundery-showers-and-with-gusty-winds.svg",
          "Thundery Showers",
        ];
      case "Heavy Thundery Showers with Gusty Winds":
        return [
          "weatherIcons-2h-24h/heavy-thundery-showers-and-with-gusty-winds.svg",
          "Heavy Thundery Showers with Gusty Winds",
        ];
      case "Cancel":
        alignNone();
        return ["weatherIcons-2h-24h/cancel.svg", "None"];
    }
  }

  // Main Code
  const data2h = load2h();
  async function load2h() {
    // Calling API
    const res = await fetch(
      (url = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
    );
    const data2h = await res.json();

    // Cleaning Data
    const pp2h = clean2h(data2h);
    function clean2h(data2h) {
      const pp2h = data2h["items"][0]["forecasts"].find(
        (weather) => weather["area"] === "Toa Payoh"
      )["forecast"];
      return pp2h;
    }

    // Displaying Data
    document.getElementById("img-2h").src = findImage2h(pp2h)[0];
    document.getElementById("text-2h").textContent = findImage2h(pp2h)[1];

    // Logging Data
    console.log([data2h["items"][0]["forecasts"], pp2h]);
    console.log("2h^^ [sg2h, pp2h]");

    updateIcons(data2h["items"][0]["forecasts"]);
    return [data2h["items"][0]["forecasts"], pp2h];
  }

  // Updating Estimated Temperature
  loadtemp();
  async function loadtemp() {
    // Calling API
    const res = await fetch(
      (url = "https://api.data.gov.sg/v1/environment/air-temperature")
    );
    const datatemp = await res.json();

    // Cleaning Data
    const pptemp = cleantemp(datatemp);
    function cleantemp(datatemp) {
      const pptemp = datatemp["items"][0]["readings"].find(
        (station) => station["station_id"] === "S121"
      )["value"];
      return pptemp;
    }

    // Displaying Data
    document.getElementById("temp-2h").textContent = pptemp.toString() + "°C";

    // Logging Data
    console.log(pptemp);
    console.log("pptemp^^");
  }

  // =======================================================================================================
  // ======================================= 24-Hour Outlook Logic =========================================
  // =======================================================================================================

  // Return Directory of Weather Icons
  function findImage24h(weather) {
    switch (weather) {
      case "Fair (Day)":
        return ["weatherIcons-2h-24h/day-fair-warm.svg", "Fair"];
      case "Fair (Night)":
        return ["weatherIcons-2h-24h/night-fair.svg", "Fair"];
      case "Fair & Warm":
        return ["weatherIcons-2h-24h/day-fair-warm.svg", "Fair & Warm"];
      case "Partly Cloudy (Night)":
        return ["weatherIcons-2h-24h/night-partly-cloudy.svg", "Partly Cloudy"];
      case "Partly Cloudy (Day)":
        return ["weatherIcons-2h-24h/day-partly-cloudy.svg", "Partly Cloudy"];
      case "Cloudy":
        return ["weatherIcons-2h-24h/cloudy.svg", "Cloudy"];
      case "Hazy":
        return ["weatherIcons-2h-24h/hazy-slightly-hazy.svg", "Hazy"];
      case "Slightly Hazy":
        return ["weatherIcons-2h-24h/hazy-slightly-hazy.svg", "Hazy"];
      case "Windy":
        return ["weatherIcons-2h-24h/windy.svg", "Windy"];
      case "Mist":
        return ["weatherIcons-2h-24h/mist.svg", "Mist"];
      case "Light Rain":
        return [
          "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg",
          "Light Rain",
        ];
      case "Moderate Rain":
        return [
          "weatherIcons-2h-24h/moderate-rain-showers.svg",
          "Moderate Rain",
        ];
      case "Heavy Rain":
        return ["weatherIcons-2h-24h/heavy-rain-showers.svg", "Heavy Rain"];
      case "Passing Showers":
        return [
          "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg",
          "Passing Showers",
        ];
      case "Light Showers":
        return [
          "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg",
          "Light Showers",
        ];
      case "Showers":
        return ["weatherIcons-2h-24h/moderate-rain-showers.svg", "Showers"];
      case "Heavy Showers":
        return ["weatherIcons-2h-24h/heavy-rain-showers.svg", "Heavy Showers"];
      case "Thundery Showers":
        return ["weatherIcons-2h-24h/thundery-showers.svg", "Thundery Showers"];
      case "Heavy Thundery Showers":
        return [
          "weatherIcons-2h-24h/heavy-thundery-showers-and-with-gusty-winds.svg",
          "Thundery Showers",
        ];
      case "Heavy Thundery Showers with Gusty Winds":
        return [
          "weatherIcons-2h-24h/heavy-thundery-showers-and-with-gusty-winds.svg",
          "Heavy Thundery Showers with Gusty Winds",
        ];
      case "Cancel":
        return ["weatherIcons-2h-24h/cancel.svg", "None"];
    }
  }

  // Main
  const data24h = load24h();
  async function load24h() {
    // Calling API
    const res = await fetch(
      (url = "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast")
    );
    const data24h = await res.json();
    // Cleaning Data
    const pp24h = clean24h(data24h);
    function clean24h(data24h) {
      const pp24h = data24h["items"][0]["periods"].map(
        (region) => region["regions"]["central"]
      );
      return pp24h;
    }
    pp24h.push("Cancel");

    // Displaying Data
    document.getElementById("img1-24h").src = findImage24h(pp24h[0])[0];
    document.getElementById("img2-24h").src = findImage24h(pp24h[1])[0];
    document.getElementById("img3-24h").src = findImage24h(pp24h[2])[0];

    // Logging Data
    console.log(pp24h);
    console.log("pp24h^^ [T1, T2, T3, T4]");
    return pp24h;
  }

  // Updating Time Label
  updateTime24h(currentHour);
  function updateTime24h(currentHour) {
    if (
      (currentHour >= 18 && currentHour < 24) |
      (currentHour >= 0 && currentHour < 6)
    ) {
      document.getElementById("text1-24h").textContent = "Night";
      document.getElementById("text2-24h").textContent = "Next Morning";
      document.getElementById("text3-24h").textContent = "Next Afternoon";
    } else if (currentHour >= 6 && currentHour < 12) {
      document.getElementById("text1-24h").textContent = "Morning";
      document.getElementById("text2-24h").textContent = "Afternoon";
      document.getElementById("text3-24h").textContent = "Night";
    } else if (currentHour >= 12 && currentHour < 18) {
      document.getElementById("text1-24h").textContent = "Afternoon";
      document.getElementById("text2-24h").textContent = "Night";
      document.getElementById("text3-24h").textContent = "Next Morning";
    }
  }

  // =======================================================================================================
  // ======================================== 4-day Outlook Logic ==========================================
  // =======================================================================================================

  // Return Directory of Weather Icons
  function findImage4d(weather) {
    if (
      weather.toLowerCase().includes("thundery") &&
      !weather.toLowerCase().includes("windy")
    )
      return "weatherIcons-2h-24h/heavy-thundery-showers-and-with-gusty-winds.svg";
    else if ("thundery" in weather.toLowerCase())
      return "weatherIcons-2h-24h/thundery-showers.svg";
    else if ("partly cloudy" in weather.toLowerCase())
      return "weatherIcons-2h-24h/day-partly-cloudy.svg";
    else if (
      ("fair" in weather.toLowerCase()) |
      ("warm" in weather.toLowerCase())
    )
      return "weatherIcons-2h-24h/day-fair-warm.svg";
    else if ("haze" in weather.toLowerCase())
      return "weatherIcons-2h-24h/hazy-slightly-hazy.svg";
    else if (
      ("light rain" in weather.toLowerCase()) |
      ("light showers" in weather.toLowerCase())
    )
      return "weatherIcons-2h-24h/light-rain-showers-passing-showers.svg";
    else if (
      ("moderate rain" in weather.toLowerCase()) |
      ("moderate showers" in weather.toLowerCase())
    )
      return "weatherIcons-2h-24h/moderate-rain-showers.svg";
    else if (
      ("heavy rain" in weather.toLowerCase()) |
      ("heavy showers" in weather.toLowerCase())
    )
      return "weatherIcons-2h-24h/heavy-rain-showers.svg";
  }

  // Main
  const data4d = load4d();
  async function load4d() {
    // Calling API
    const res = await fetch(
      (url = "https://api.data.gov.sg/v1/environment/4-day-weather-forecast")
    );
    const data4d = await res.json();

    // Cleaning Data
    const pp4d = clean4d(data4d);
    function clean4d(data4d) {
      const pp4d = [
        data4d["items"][0]["forecasts"].map((days) => [
          days["forecast"],
          days["temperature"],
        ]),
      ];
      return pp4d;
    }

    // Displaying Data
    document.getElementById("day1-4d").textContent = `${
      dayNames[d.getDay() + 1 < 7 ? d.getDay() + 1 : d.getDay() - 6]
    }`;
    document.getElementById("day2-4d").textContent = `${
      dayNames[d.getDay() + 2 < 7 ? d.getDay() + 2 : d.getDay() - 5]
    }`;
    document.getElementById("day3-4d").textContent = `${
      dayNames[d.getDay() + 3 < 7 ? d.getDay() + 3 : d.getDay() - 4]
    }`;
    document.getElementById("day4-4d").textContent = `${
      dayNames[d.getDay() + 4 < 7 ? d.getDay() + 4 : d.getDay() - 3]
    }`;

    document.getElementById("weather1-4d").textContent = pp4d[0][0][0];
    document.getElementById("weather2-4d").textContent = pp4d[0][1][0];
    document.getElementById("weather3-4d").textContent = pp4d[0][2][0];
    document.getElementById("weather4-4d").textContent = pp4d[0][3][0];

    document.getElementById(
      "temp1-4d"
    ).textContent = `${pp4d[0][0][1]["low"]}-${pp4d[0][0][1]["high"]}°C`;
    document.getElementById(
      "temp2-4d"
    ).textContent = `${pp4d[0][1][1]["low"]}-${pp4d[0][1][1]["high"]}°C`;
    document.getElementById(
      "temp3-4d"
    ).textContent = `${pp4d[0][2][1]["low"]}-${pp4d[0][2][1]["high"]}°C`;
    document.getElementById(
      "temp4-4d"
    ).textContent = `${pp4d[0][3][1]["low"]}-${pp4d[0][3][1]["high"]}°C`;

    document.getElementById("img1-4d").src = findImage4d(pp4d[0][0][0]);
    document.getElementById("img2-4d").src = findImage4d(pp4d[0][1][0]);
    document.getElementById("img3-4d").src = findImage4d(pp4d[0][2][0]);
    document.getElementById("img4-4d").src = findImage4d(pp4d[0][3][0]);

    // Logging Data
    console.log(pp4d);
    console.log("pp4d^^ [D1[forecast, temp{low, high}], D2[], D3[], D4[]]");
    return pp4d;
  }

  // =======================================================================================================
  // ========================================= SG 2-Hour Outlook ===========================================
  // =======================================================================================================

  // Getting Weather Icons Shorthand
  function getForecast(townObj) {
    for (var i = 0; i < availableLegendList.length; i++) {
      if (availableLegendList[i]["description"] === townObj["forecast"]) {
        return availableLegendList[i]["forecast"];
      }
    }
  }

  // Updating Weather Icons
  function updateIcons(data2h) {
    data2h.map((townObj) => {
      if (Towns.includes(townObj["area"])) {
        document.getElementById(
          townObj["area"].replaceAll(" ", "_")
        ).firstChild.src = `https://www.nea.gov.sg/assets/images/icons/weather-bg/${getForecast(
          townObj
        )}.png`;
        document.getElementById(townObj["area"].replaceAll(" ", "_")).title =
          townObj["area"] + "\n" + townObj["forecast"];
      }
    });
  }

  // Displaying Outlook Updated Time
  function updateTime(updatedTime) {
    const updateText =
      "Updated at " +
      updatedTime +
      " | " +
      d.getDate() +
      " " +
      monthNames[d.getMonth()].substring(0, 3);
    document.getElementById("updated-time").textContent = updateText;
  }

  // Displaying Outlook Valid Time
  validTime(currentHour, currentMinutes);
  function validTime(hours, mins) {
    var lowerHour = hours;
    var upperHour = hours + 2;
    var lowerSuffix = "";
    var upperSuffix = "";
    var validMinutes = "";
    if (upperHour > 24) {
      upperHour = upperHour - 24;
    }
    if (mins < 30) {
      validMinutes = "00";
    } else {
      validMinutes = "30";
    }
    if (lowerHour > 12) {
      lowerHour = `${lowerHour - 12}`;
      lowerSuffix = "pm";
    } else {
      lowerHour = lowerHour;
      lowerSuffix = "am";
    }
    if (upperHour > 12) {
      upperHour = `${upperHour - 12}`;
      upperSuffix = "pm";
    } else {
      upperHour = upperHour;
      upperSuffix = "am";
    }

    document.getElementById("valid-time").textContent =
      lowerHour +
      ":" +
      validMinutes +
      lowerSuffix +
      " to " +
      upperHour +
      ":" +
      validMinutes +
      upperSuffix;

    updateTime(`${lowerHour}:${validMinutes + lowerSuffix}`);
  }
}
