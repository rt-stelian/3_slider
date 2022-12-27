const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");
const sideSlide = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");

const slidesQty = mainSlide.querySelectorAll("div").length;
sideSlide.style.top = `-${(slidesQty - 1) * 100}vh`;

btnUp.addEventListener("click", () => slideMover("up"));
btnDown.addEventListener("click", () => slideMover("down"));

document.addEventListener("keydown", (ev) => {
	if (ev.key === "ArrowUp") {
		slideMover("up");
	}
	if (ev.key === "ArrowDown") {
		slideMover("down");
	}
});

let slideIndex = 0;
function slideMover(direction) {
	if (direction === "up") {
		slideIndex++;
		if (slideIndex === slidesQty) {
			slideIndex = 0;
		}
	}
	if (direction === "down") {
		slideIndex--;
		if (slideIndex < 0) {
			slideIndex = slidesQty - 1;
		}
	}

	const height = container.clientHeight;
	sideSlide.style.transform = `translateY(${slideIndex * height}px)`;
	mainSlide.style.transform = `translateY(-${slideIndex * height}px)`;
}
