window.addEventListener('click', function(e) {

	if (e.target.dataset.action === "minus" || e.target.dataset.action === "plus") {
		var counterWrapper = e.target.closest('.counter-wrapper')
		var counter = counterWrapper.querySelector('[data-counter]');		
	}

	if (e.target.dataset.action === "minus") {
		if (counter.innerText > 1) {
			counter.innerText--
		} else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			e.target.closest('.cart-item').remove()

			toggleCartStatus()

			calcCartPrice()
		}
	}

	if (e.target.dataset.action === "plus") counter.innerText++

	if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
		calcCartPrice()
	}
});