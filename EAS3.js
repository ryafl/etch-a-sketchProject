
let start = document.querySelector('#start');
start.addEventListener('click', startGame);
let buttonCounter = 0;

function startGame() {
	buttonCounter +=1;
	let numbRAC = prompt("How many rows and columns do you want");
	if (isNaN(numbRAC)) {
		numbRAC = 16;
	}

	let columns = "";

	for (let i = 0; i < numbRAC; i++) {
		columns += ' auto';

	}

	const container1 = document.querySelector('#container1');
	if (buttonCounter == 1) {
	}
	else 
		{
			let gridRemvoval = document.querySelector("div.gridContainer");
			container1.removeChild(gridRemvoval);
		}
	let gridCont = document.createElement('div');
	gridCont.classList.add('gridContainer');

	gridCont.setAttribute('style', 'display: grid; background-color: blue; max-width: 960px; max-height: 960px; grid-template-columns:' + columns);
	container1.appendChild(gridCont);

	let startFrom1Counter = numbRAC + 1;
	let numOfSquares = numbRAC * numbRAC +1;



	for (let j = 1; j < numOfSquares; j++) {
		let nameOfClass = 'GridItem' + j.toString();
		let gridItem = document.createElement('div');
		gridItem.classList.add(nameOfClass);
		gridItem.textContent = j.toString();
		gridCont.appendChild(gridItem);


	}


}