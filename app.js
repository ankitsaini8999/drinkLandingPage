"use strict";

const bg = document.querySelector("#bg");
const box = document.querySelectorAll(".box");
const cans = document.querySelector(".cans");

let arrCol = [
	"linear-gradient(175deg, #1cade7, #04f8cb)",
	"linear-gradient(175deg, #00ff4c, #cdec5c)",
	"linear-gradient(175deg, #fca966, #f82904)",
	"linear-gradient(175deg, #6600ff, #6650ff)",
];
let arrImg = ["img/A01b.png", "img/A01g.png", "img/A01o.png", "img/A01p.png"];
for (let i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function () {
		bg.style.background = arrCol[i];
		cans.style.backgroundImage = `url(${arrImg[i]}`;
	});
}
