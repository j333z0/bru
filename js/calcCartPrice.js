function calcCartPrice() {
	const cartItems = document.querySelectorAll('.cart-item');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryPrice = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	let totalPrice = 0

	cartItems.forEach(function(item) {
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.price__currency');
		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
		totalPrice += currentPrice
	});

	totalPriceEl.innerText = totalPrice

	if (totalPrice > 0) {
		cartDelivery.classList.remove('none')
	} else cartDelivery.classList.add('none')

	if (totalPrice > 700) {
		deliveryPrice.classList.add('free')
		deliveryPrice.innerText = 'бесплатно'
	} else {
		deliveryPrice.classList.remove('free')
		deliveryPrice.innerText = '250$'
	}
}