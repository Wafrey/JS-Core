function solve() {

    const baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId='depot';
    let currentStop;

    function depart(){

        $.ajax({

            method: 'GET',
            url: baseUrl + currentStopId + `.json`,
            success: loadStop ,    
        })
    }

    function loadStop(data){

        currentStop=data;
        $('.info').text(`Next stop ${data.name}`);
        switchButtons('depart', 'arrive');
    }

    function arrive(){

        $('.info').text(`Arriving at ${currentStop.name}`);
        currentStopId=currentStop.next;
        switchButtons('arrive', 'depart');
    }

    function switchButtons(disable, enable){

        $(`#${disable}`).attr('disabled', true);
        $(`#${enable}`).attr('disabled', false);
    }
  
    return {
        depart,
        arrive
    };
}
let result = solve();

