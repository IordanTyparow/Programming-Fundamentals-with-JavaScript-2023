async function getInfo() {
    let input = document.getElementById('stopId');
    let result = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    let baseUrl = `http://localhost:3030/jsonstore/bus/businfo/`;

    let busStop = input.value;

    buses.innerHTML = '';
    input.value = '';

    try {
        let response = await fetch(baseUrl + busStop);

        let data = await response.json();

        result.textContent = data.name;

        for (const key in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            buses.appendChild(li);
        }
    } catch (error) {
        stopName.textContent = 'Error';
    }
}