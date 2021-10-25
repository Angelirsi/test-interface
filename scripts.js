function copyText() {
	let body = document.getElementsByTagName('body')[0];
	let text = document.getElementById('address').innerHTML;
	let input = document.createElement('input');

	body.appendChild(input);
	input.setAttribute('value', text)
	input.select();
	document.execCommand('copy');
	body.removeChild(input);
}

let tabs = document.querySelector(".tabs");
let tabButton = document.querySelectorAll(".js-tab-title");
let contents = document.querySelectorAll(".js-tab-content");

tabs.onclick = e => {
	let id = e.target.dataset.id;
	if (id) {
		tabButton.forEach(btn => {
			btn.classList.remove("active");
		});
		e.target.classList.add("active");

		contents.forEach(content => {
			content.classList.remove("active");
		});
		let element = document.getElementById(id);
		element.classList.add("active");
	}
}

function snakeWidth(el) {
	let widthPX = el.value;
	let target = el.nextSibling.nextSibling;
	let span = el.parentElement.nextSibling.nextSibling;
	let maxValue = el.getAttribute('max')
	let widthRatio = Math.round(widthPX / maxValue * 100);

	span.innerHTML = widthPX + 'px';
	target.style.width = widthRatio + '%';
}