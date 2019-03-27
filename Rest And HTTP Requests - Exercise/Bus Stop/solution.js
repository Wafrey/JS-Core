function getInfo() {

    const baseUrl = 'https://judgetests.firebaseio.com/businfo/';
    let busId = $('#stopId').val();

    $.ajax({

        method: 'GET',
        url: baseUrl + busId + '.json',
        success: logData,
        error: handleError
    })

    function logData(data){
        
        $('#stopName').text(data.name);

       for (let [key,value] of Object.entries(data.buses)){
           
          let ul=$('#buses');
          let li=$('<li></li>');
          li.text(`Bus ${key} arrives in ${value} minutes\n`);
          ul.append(li);
       }
    }

    function handleError(err){
 
        $('#stopName').text(`Error`);
    }

}