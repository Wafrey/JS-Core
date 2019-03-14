function busRoute() {

    let firstStop = $("[name='first-stop']");
    let lastStop = $("[name='last-stop']");

    let firstStopNum = Number(firstStop.val());
    let lastStopNum = Number(lastStop.val());

    let allBusStops = $('#bus-stops > li');
    let busStopsTarget = $('#selected-bus-stops');
    
    if (firstStopNum > 0 && lastStopNum <= allBusStops.length && firstStopNum < lastStopNum) {

        busStopsTarget.empty()

        let BusStopsRoute = $('#selected-route > span').text(`${firstStopNum}-${lastStopNum}`);

        for (let i = firstStopNum - 1; i <= lastStopNum - 1; i++) {
            let text = $(allBusStops[i]).text();
            let li = $('<li></li>').text(text);
            busStopsTarget.append(li)
        }

      firstStop.val('');
      lastStop.val('');
    }
}

$(() => {
    let busStops = [
        "Gen. Gurko St.",
        "Sofia University",
        "Eagles' Bridge Sq.",
        "Bulgarian News Agency",
        "Peyo Yavorov Blvd.",
        "Aleksandar Zhendov Bvld.",
        // You can add/remove bus stops from here
    ]

    let listBusStops = $('#bus-stops')
    for (let i = 0; i < busStops.length; i++) {
        const busStopLi = $('<li>').text(busStops[i]);

        listBusStops.append(busStopLi)
    }
})