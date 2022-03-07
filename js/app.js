/** @format */

const number = document.querySelector(".number");
const btn = document.querySelector(".gen-button");

const generateNumber = () => {
	const randomNumberGen = Math.floor(Math.random() * 10 + 1);
	number.innerHTML = randomNumberGen;
};

btn.addEventListener("click", generateNumber);
generateNumber(); // for initial Generate Number
