const colors = document.querySelectorAll(".hex");
const refreshButton = document.querySelector(".btn");
const addBtn = document.querySelector(".btn2");
const textColor = document.querySelector(".text-color");
function hexcolor() {
	return "#" + Math.random().toString(16).slice(2, 8);
}
function hex() {
	colors.forEach((hex) => {
		const color = hexcolor();
		hex.innerText = color;
		hex.style.background = color;
		hex.onclick = () => {
			document.body.style.backgroundColor = color;
			textColor.innerText = color;
			refreshButton.style.backgroundColor = color;
			addBtn.style.backgroundColor = color;
		};
	});
}
refreshButton.onclick = hex;

hex();
