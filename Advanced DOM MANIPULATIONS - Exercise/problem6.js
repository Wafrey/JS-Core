function attachEventsListeners(){

    let $days=$('#days');
    let $hours=$('#hours');
    let $minutes=$('#minutes');
    let $seconds=$('#seconds');
   

    $('input[type="button"]').on('click', function(){


        let unit=$(this).attr('id').replace('Btn', '');

        switch(unit){
            
            case 'days':
            $hours.val($days.val()*24);
            $minutes.val($hours.val()*60);
            $seconds.val($minutes.val()*60);
            break;

            case 'hours':
            $days.val($hours.val()/24);
            $minutes.val($hours.val()*60);
            $seconds.val($minutes.val()*60);
            break;

            case 'minutes':
            $hours.val($minutes.val()/60);
            $days.val($hours.val()/24);
            $seconds.val($minutes.val()*60);
            break;

            case 'seconds':
            $minutes.val($seconds.val()/60)
            $hours.val($minutes.val()/60);
            $days.val($hours.val()/24);           
            break;
        }
    });
}