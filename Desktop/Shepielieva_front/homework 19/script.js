const entities = {
    people: {
      url: 'https://swapi.dev/api/people/',
      list: document.querySelector(swapi.selectors.listPeople),
      loadMoreBtn: document.querySelector(swapi.selectors.loadMorePeopleBtn),
    },
    planets: {
      url: 'https://swapi.dev/api/planets/',
      list: document.querySelector(swapi.selectors.listPlanets),
      loadMoreBtn: document.querySelector(swapi.selectors.loadMorePlanetsBtn),
    },
    vehicles: {
      url: 'https://swapi.dev/api/vehicles/',
      list: document.querySelector(swapi.selectors.listVehicles),
      loadMoreBtn: document.querySelector(swapi.selectors.loadMoreVehiclesBtn),
    }
  };  

  loadData(swapi.planets);
  loadData(swapi.planets);
  loadData(swapi.vehicles)

function loadData(entity) {
    fetch(entity.url)
        .then(res => res.json())
        .then(result => {
            const items = result.results;

            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                list.appendChild(li);
            });

            link = result.next;

            if (link) {
                loadMoreBtn.classList.remove('hidden');
            } else {
                loadMoreBtn.classList.add('hidden');
            }
        })
        .catch(() => {
            alert('Не удалось загрузить людей');
        });
}

    config.button.addEventListener('click', loadData);
    config.loadMoreBtn.addEventListener('click', () => {
        if (currentUrl) loadData();
    });




