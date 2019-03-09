function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here

    let $product = $('.custom-select');
    let $price = $('#price');
    let $totalPrice = $('#sum');
    let $quantity = $('#quantity');
    let $button = $('#submit');
    let $capacity = $('#capacity');
    let $inventoryList = $('.display');

    $product.on('input', () => {
        let isEmpty = $product.val() === ''
        
        $button.attr('disabled', isEmpty);
    });

    $button.on('click', onButtonClick);

    function onButtonClick() {
        let currentCapacity = Number($capacity.val());
        let currentQuantity = Number($quantity.val());
        let totalCapacity = currentCapacity + currentQuantity;
        if (totalCapacity < 150) {
            addProductToInventory();
            $capacity.val(totalCapacity);
            $totalPrice.val(
                Number($totalPrice.val()) + Number($price.val()));
        }
        else {
            disableInterface();
        }

        reset();
    }

    function addProductToInventory() {
        $li = $(`<li>Product: ${$product.val()} Price: ${$price.val()} Quantity: ${$quantity.val()}</li>`);
        $inventoryList.append($li);
    }

    function reset() {
        $product.val('');
        $price.val(1);
        $quantity.val(1);
        $button.attr('disabled', true);
    }

    function disableInterface() {
        $capacity.val('full');
        $capacity.addClass('fullCapacity');
        $product.attr('disabled', true);
        $price.attr('disabled', true);
        $quantity.attr('disabled', true);
        $button.attr('disabled', true);
    }
}
