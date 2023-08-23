function attachGradientEvents() {

    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', mouseMove);
    gradientElement.addEventListener('mouseout', mouseOut);

    function mouseMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = `${power}%`;
    }

    function mouseOut(e) {
        document.getElementById('result').textContent = '';
    }
}