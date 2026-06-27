const apiKey = "e506257c876eb303d7a39209780b2d67";

const cityInput = document.getElementById("city");
const weatherInfo = document.getElementById("weatherInfo");
const taskInput = document.getElementById("taskInput");
const altInput = document.getElementById("altInput");
const addTaskBtn = document.getElementById("addTask");
const getWeatherBtn = document.getElementById("getWeather");
const taskList = document.getElementById("taskList");

let currentWeather = "";
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function getOutfit(weather) {
  const outfits = {
    clear: "T-shirt and sunglasses 😎",
    clouds: "Light sweater or hoodie ☁️",
    rain: "Waterproof jacket and boots 🌧️",
    thunderstorm: "Raincoat and sturdy shoes ⚡",
    snow: "Warm coat, gloves, and boots ❄️",
    mist: "Light jacket and scarf 🌫️"
  };
  return outfits[weather.toLowerCase()] || "Dress comfortably!";
}

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) return alert("Enter a city!");

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    if (data.cod !== 200) {
      weatherInfo.textContent = `Error: ${data.message}`;
      return;
    }

    currentWeather = data.weather[0].main.toLowerCase();
    weatherInfo.textContent = `Current weather in ${city}: ${data.weather[0].main}, ${data.main.temp}°C`;

    renderTasks();
  } catch (err) {
    console.error(err);
    alert("Failed to fetch weather.");
  }
}

function addTask() {
  const name = taskInput.value.trim();
  const indoorAlternative = altInput.value.trim();
  if (!name) return alert("Enter a task!");

  const outfit = getOutfit(currentWeather);
  tasks.push({ name, indoorAlternative, outfit });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  altInput.value = "";
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <p>Task: ${task.name}</p>
      <p>Indoor alternative: ${task.indoorAlternative}</p>
      <p>Suggested outfit: ${task.outfit}</p>
      <button onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(div);
  });
}

// Attach events
addTaskBtn.onclick = addTask;
getWeatherBtn.onclick = getWeather;
window.removeTask = removeTask;

// Initial render
renderTasks();
