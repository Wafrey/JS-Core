function attachEventsListeners() {
    let rates = {km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254};
    let btn = document.getElementById('convert');
    btn.addEventListener('click',convert);
    function convert(event) {
        let inputValue = document.getElementById('inputDistance');
        let fromValue = document.getElementById('inputUnits').value;
        let toValue  = document.getElementById('outputUnits').value;
        let outputValue = document.getElementById('outputDistance');
        outputValue.disabled = false;
        outputValue.value = Number(inputValue.value) * rates[fromValue] / rates[toValue];
    }
}