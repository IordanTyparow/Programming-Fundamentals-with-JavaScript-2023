function solve() {

    async function depart() {
        let departBtn = document.getElementById('depart');
        let arriveBtn = document.getElementById('arrive');

        let baseUrl = `http://localhost:3030/jsonstore/bus/schedule/`;
        let scheduleId = 'depot';

        let textSpan = document.querySelector('.info');

        try {

            let response = await fetch(baseUrl + scheduleId);

            let data = await response.json();

            textSpan.textContent = `Next stop ${data.name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            textSpan.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    async function arrive() {
        let departBtn = document.getElementById('depart');
        let arriveBtn = document.getElementById('arrive');

        let baseUrl = `http://localhost:3030/jsonstore/bus/schedule/`;
        let scheduleId = 'depot';

        let textSpan = document.querySelector('.info');

        try {
            let response = await fetch(baseUrl + scheduleId);
            let data = await response.json();

            textSpan.textContent = `Arriving at ${data.name}`;

            departBtn.disabled = false;
            arriveBtn.disabled = true;

        } catch (error) {
            textSpan.textContent = 'Error';
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();