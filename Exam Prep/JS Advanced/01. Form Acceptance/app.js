function acceptance() {

	let $company = $('input[name="shippingCompany"]');
	let $product = $('input[name="productName"]');
	let $quantity = $('input[name="productQuantity"]');
	let $scrape = $('input[name="productScrape"]');
	let $warehouse = $('#warehouse');

	if (($company.val() && $product.val()) && (+($quantity.val()) && +($scrape.val()))) {

		let quantity = (+$quantity.val()) - (+$scrape.val());

		if (quantity > 0) {
			let $div = $('<div></div>');
			let $p = $(`<p>[${$company.val()}] ${$product.val()} - ${quantity} pieces</p>`);

			let $button = $('<button>Out of stock</button>');
			$button.on('click', () => $div.remove());

			$div.append($p).append($button);
			$warehouse.append($div);

		}
	}

	$company.val('');
	$product.val('');
	$quantity.val('');
	$scrape.val('');
}