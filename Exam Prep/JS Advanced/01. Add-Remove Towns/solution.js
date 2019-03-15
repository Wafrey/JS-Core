function attachEvents() {
    

    let addBtn=$('#btnAdd');
    let deleteBtn=$('#btnDelete')

    addBtn.on('click', function(){

        let input=$('#newItem');
        let towns=$('#towns');
        let option=$('<option></option>');

        if (input.val() !== '') {
            option.append(input.val());
            towns.append(option);
        }
   
       input.val('');
    })

    deleteBtn.on('click', function(){

        let option=$('#towns option:selected');
        option.remove();
    })
}