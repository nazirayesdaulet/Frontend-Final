var indexColour = 0;

    document.addEventListener("DOMContentLoaded", () => {
      indexColour = localStorage.getItem("indexColour") ? parseInt(localStorage.getItem("indexColour")) : 0;
      applyBackgroundColor();
    });

    function changeBackgroundColor() {
      indexColour = indexColour === 0 ? 1 : 0;
      localStorage.setItem("indexColour", indexColour);
      applyBackgroundColor();
    }

    function applyBackgroundColor() {
      if (indexColour === 0) {
        document.body.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 1) 4%, rgb(102, 0, 140) 80%)";
        document.body.style.color = "#333";
        setFontSize("1em");
      } else {
        document.body.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 1) 4%, rgb(226, 146, 255)80%)";
        document.body.style.color = "#fff";
        setFontSize("1.1em");
      }
    }

    function setFontSize(size) {
        document.body.style.fontSize = value + "px";
      }

function validateForm() {
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });

    const performance = document.getElementById('performance').value;
    if (!performance) {
        document.getElementById('performanceError').textContent = 'Performance is required.';
        isValid = false;
    }

    const telegram = document.getElementById('telegram').value;
    if (!telegram) {
        document.getElementById('telegramError').textContent = "Leader's Telegram is required.";
        isValid = false;
    }

    const instruments = document.getElementById('instruments').value;
    if (!instruments) {
        document.getElementById('instrumentsError').textContent = 'Instruments are required.';
        isValid = false;
    }

    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    const date = document.getElementById('date').value;
    if (!date) {
        document.getElementById('dateError').textContent = 'Date selection is required.';
        isValid = false;
    }

    const time = document.getElementById('time').value;
    if (!time) {
        document.getElementById('timeError').textContent = 'Time selection is required.';
        isValid = false;
    }

    return isValid;
}


const stars = document.querySelectorAll('.stars');
const ratingMessage = document.getElementById('ratingMessage');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');


        stars.forEach(s => s.classList.remove('selected'));

        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('selected');
        }

        ratingMessage.textContent = `You rated: ${ratingValue} star(s)`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const additionalContent = document.getElementById('additionalContent');

    readMoreBtn.addEventListener('click', function() {
        if (additionalContent.style.display === "none" || additionalContent.style.display === "") {
            additionalContent.style.display = "block"; 
            readMoreBtn.textContent = "Read Less"; 
        } else {
            additionalContent.style.display = "none"; 
            readMoreBtn.textContent = "Read More";
        }
    });
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
let currentIndex = 0; 

function setFocus(index) {
    navLinks.forEach(link => link.classList.remove('focused')); 
    navLinks[index].focus(); 
    navLinks[index].classList.add('focused'); 
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % navLinks.length;
        setFocus(currentIndex);
        event.preventDefault(); 
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length; 
        setFocus(currentIndex);
        event.preventDefault(); 
    }
});

setFocus(currentIndex);
    
document.addEventListener("DOMContentLoaded", () => {
    const events = [
      { name: "Acoustic Night", date: "2024-04-18", description: "An evening of smooth acoustic performances." },
      { name: "Halloween", date: "2024-10-31", description: "Spooky and scary music on." },
      { name: "Club Fair", date: "2024-09-16", description: "An event, where we introduce our club to freshmen." },
      { name: "Open Doors", date: "2024-08-31", description: "Our university opens its doors for everyone, and we did that too!" },
      { name: "Christmas Eve", date: "2024-12-26", description: "The most comfort and warm evening ever." },
    ];
  
    const eventList = document.getElementById("event-list");
    const searchInput = document.getElementById("event-search");
    const filterSelect = document.getElementById("filter-type");
  
    const savedSearch = localStorage.getItem("search") || "";
    const savedFilter = localStorage.getItem("filter") || "all";
  
    searchInput.value = savedSearch;
    filterSelect.value = savedFilter;
  
    function renderEvents(search = "", filter = "all") {
      eventList.innerHTML = "";
  
      const today = new Date().toISOString().split("T")[0]; 
      let filteredEvents = events;
  
      if (filter === "upcoming") {
        filteredEvents = events.filter(event => event.date >= today);
      } else if (filter === "past") {
        filteredEvents = events.filter(event => event.date < today);
      }
  
      filteredEvents = filteredEvents.filter(event =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );
  
      if (filteredEvents.length === 0) {
        eventList.innerHTML = `<p>No events found.</p>`;
      } else {
        filteredEvents.forEach(event => {
          const eventElement = document.createElement("div");
          eventElement.classList.add("event");
          eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
          `;
          eventList.appendChild(eventElement);
        });
      }
    }

    searchInput.addEventListener("input", () => {
      localStorage.setItem("search", searchInput.value);
      renderEvents(searchInput.value, filterSelect.value);
    });
  
    filterSelect.addEventListener("change", () => {
      localStorage.setItem("filter", filterSelect.value);
      renderEvents(searchInput.value, filterSelect.value);
    });

    renderEvents(savedSearch, savedFilter);
  });


var map;
var marker;

function geocodeAddress() {
    var api_key = '9b2a2c4796654f5e975c6ba44a8a2996';
    var query = document.getElementById('addressInput').value;

    var api_url = 'https://api.opencagedata.com/geocode/v1/json';
    var request_url = api_url + '?' + 'key=' + api_key + '&q=' + encodeURIComponent(query) + '&pretty=1' + '&no_annotations=1';

    fetch(request_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.results.length > 0) {
                var result = data.results[0];
                var coordinates = result.geometry.lat + ', ' + result.geometry.lng;
                document.getElementById('coordinates').innerText = "Coordinates: " + coordinates;
                
                var lat = result.geometry.lat;
                var lng = result.geometry.lng;

                if (map) {
                    map.remove();
                }

                map = L.map('map').setView([lat, lng], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                if (marker) {
                    marker.remove();
                }

                marker = L.marker([lat, lng]).addTo(map)
                    .bindPopup("Location: " + query)
                    .openPopup();
            } else {
                document.getElementById('coordinates').innerText = "No results found.";
                document.getElementById('map').innerHTML = ''; 
            }
        })
        .catch(error => {
            console.log("Error: " + error);
            document.getElementById('coordinates').innerText = "Error fetching data.";
            document.getElementById('map').innerHTML = '';
        });
}



 