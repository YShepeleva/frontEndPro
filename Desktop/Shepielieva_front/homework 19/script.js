const loadMoreBtn = document.querySelector('.load-more');
const planetsBlock = document.querySelector('.block-planets');
const vehiclesBlock = document.querySelector('.block-vehicles');
const loadMorePlanetsBtn = planetsBlock.querySelector('.load-more');
const loadMoreVehiclesBtn = vehiclesBlock.querySelector('.load-more');

let peopleUrl = 'https://swapi.dev/api/people/';
let planetsUrl = 'https://swapi.dev/api/planets/';
let vehiclesUrl = 'https://swapi.dev/api/vehicles/';

function loadPeople() {
    fetch(peopleUrl)
        .then(res => res.json())
        .then(result => {
            const namePeople = result.results;
            const list = document.querySelector('.list-charactars');

            namePeople.forEach(person => {
                const li = document.createElement('li');
                li.textContent = person.name;
                list.appendChild(li);
            });

            if (peopleUrl) {
                loadMoreBtn.classList.remove('hidden');
            } else {
                loadMoreBtn.classList.add('hidden');
            }
        })
        .catch(() => {
            alert('Не удалось загрузить людей');
        });
}

loadMoreBtn.addEventListener('click', () => {
    if (peopleUrl) loadPeople();
});

document.querySelector('.button-charactars').addEventListener('click', () => {
    loadPeople();
});


function loadPlanets() {
    fetch(planetsUrl)
        .then(res => res.json())
        .then(result => {
            const planets = result.results;
            const list = planetsBlock.querySelector('.list-planets');

            planets.forEach(planet => {
                const li = document.createElement('li');
                li.textContent = planet.name;
                list.appendChild(li);
            });

            if (planetsUrl) {
                loadMorePlanetsBtn.classList.remove('hidden');
            } else {
                loadMorePlanetsBtn.classList.add('hidden');
            }
        })
        .catch(() => {
            alert('Не удалось загрузить планеты.');
        });
}

planetsBlock.querySelector('.button-planets').addEventListener('click', () => {
    loadPlanets();
});

loadMorePlanetsBtn.addEventListener('click', () => {
    if (planetsUrl) loadPlanets();
});

function loadVehicles() {
    fetch(vehiclesUrl)
        .then(res => res.json())
        .then(result => {
            const vehicles = result.results;
            const list = vehiclesBlock.querySelector('.list-vehicles');

            vehicles.forEach(v => {
                const li = document.createElement('li');
                li.textContent = v.name;
                list.appendChild(li);
            });

            if (vehiclesUrl) {
                loadMoreVehiclesBtn.classList.remove('hidden');
            } else {
                loadMoreVehiclesBtn.classList.add('hidden');
            }
        })
        .catch(() => {
            alert('Не удалось загрузить транспорт');
        });
}

vehiclesBlock.querySelector('.button-vehicles').addEventListener('click', () => {
    loadVehicles();
});

loadMoreVehiclesBtn.addEventListener('click', () => {
    if (vehiclesUrl) loadVehicles();
});

