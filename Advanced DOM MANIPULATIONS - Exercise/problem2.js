function addItem(){

    let itemText=$('#newItemText');
    let itemValue=$('#newItemValue');

    let $select=$('#menu');
    let $option=$(`<option value="${itemValue.val()}">${itemText.val()}</option>`);

    $select.append($option);

    itemText.val('');
    itemValue.val('');
}