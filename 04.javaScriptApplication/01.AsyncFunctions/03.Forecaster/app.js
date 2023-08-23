function attachEvents() {
    let locationValue = document.getElementById('location');
    let getWheaterBtn = document.getElementById('submit');

    let createDivSection = document.createElement('div');
    let upcomingDiv = document.createElement('div');

    let forecastElement = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upcomingSection = document.getElementById('upcoming');

    getWheaterBtn.addEventListener('click', async () => {
        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        let data = await response.json();

        let name = '';

        for (const el of data) {
            if (el.name === locationValue.value) {
                name = el.code;
            }
        }

        createDivSection.remove();

        try {
            let responseForCurrentCity = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${name}`);
            let dataToCurrentCity = await responseForCurrentCity.json();

            forecastElement.style.display = 'block';

            createDivSection.classList.add('forecasts');
            createDivSection.innerHTML = `
            <span class="condition symbol">&#x2600</span>
           <span class="condition">
           <span class="forecast-data">${dataToCurrentCity.name}</span>
           <span class="forecast-data">${dataToCurrentCity.forecast.low}&#176;/${dataToCurrentCity.forecast.high}&#176;</span>
           <span class="forecast-data">${dataToCurrentCity.forecast.condition}</span>
           </span>
           `;

            let response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${name}`);
            let upcomingData = await response.json();

            let times = {
                'Partly sunny': '&#x26C5;',
                'Sunny': '&#x2600;',
                'Overcast': '&#x2601;',
                'Rain': '&#x2614;'
            }

            upcomingDiv.classList.add('forecast-info');
            upcomingDiv.innerHTML = `
            <span class="upcoming">
            <span class="symbol">${times[upcomingData.forecast[0].condition]}</span>
            <span class="forecast-data">${upcomingData.forecast[0].low}&#176;/${upcomingData.forecast[0].high}&#176;</span>
                    <span class="forecast-data">${upcomingData.forecast[0].condition}</span>
                    </span>
                <span class="upcoming">
                <span class="symbol">${times[upcomingData.forecast[1].condition]}</span>
                <span class="forecast-data">${upcomingData.forecast[1].low}&#176;/${upcomingData.forecast[1].high}&#176;</span>
                <span class="forecast-data">${upcomingData.forecast[1].condition}</span>
                </span>
                <span class="upcoming">
                <span class="symbol">${times[upcomingData.forecast[2].condition]}</span>
                <span class="forecast-data">${upcomingData.forecast[2].low}&#176;/${upcomingData.forecast[2].high}&#176;</span>
                <span class="forecast-data">${upcomingData.forecast[2].condition}</span>
                </span>
                `;

            current.appendChild(createDivSection);
            upcomingSection.appendChild(upcomingDiv)
        } catch (error) {
            createDivSection.remove();
            upcomingDiv.remove();

            let span = document.createElement('span');
            span.setAttribute('class', 'Error');
            span.textContent = 'Error';

            current.appendChild(span);
        }
    });
}

attachEvents();