//variables..
const container = document.querySelector('.box');
//const btn = document.querySelector('.btn');
//const btn = document.querySelector('.btn');

	//functions
	function runEvent(e){
		console.log(e.type);

	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;		
	}

	


	//Event Handlers..
	container.addEventListener('mousemove', runEvent);
	container.style.width = '100%';
	container.style.textAlign = 'center';
	container.style.fontSize = '150px';
	container.style.color = 'grey';
