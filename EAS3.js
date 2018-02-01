
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

	gridCont.setAttribute('style', 'display: grid; grid-gap: 1px; padding: 5px; background-color: #376d17; width: 960px; height: 600px; grid-template-columns:' + columns);
	container1.appendChild(gridCont);

	let startFrom1Counter = numbRAC + 1;
	let numOfSquares = numbRAC * numbRAC +1;



	for (let j = 1; j < numOfSquares; j++) {
		let nameOfClass = 'GridItem' + j.toString();
		//let nameOfClass = 'GridItem';
		let gridItem = document.createElement('div');
		gridItem.classList.add(nameOfClass);
		//gridItem.textContent = j.toString();
		gridItem.setAttribute('style', 'background-color: #a0d481');
		gridItem.addEventListener('mouseenter', function() {
			
			changeColor(j);
		});
		gridCont.appendChild(gridItem);


	}


}

function changeColor(classLoc) {
	
	let identifier = classLoc;
	let placer = classLoc + 1;
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	let colorOf = 'rgb(' + r +', ' + g + ', ' + b + ');';

	let nameIt = "div.GridItem" + identifier.toString();
	let correctOrder = "div.GridItem" + placer.toString();
	let container = document.querySelector('div.gridContainer');
	let colorIt = document.querySelector(nameIt);
	let placeHolder = document.querySelector(correctOrder);

	colorIt.setAttribute('style', 'background-color: '+ colorOf);
	container.insertBefore(colorIt, placeHolder);

} 
