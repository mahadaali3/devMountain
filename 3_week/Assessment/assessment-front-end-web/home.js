console.log("hello world");

let picture = document.querySelector('#cat')
picture.addEventListener('mouseover', () => {
	alert("You're awesome!")
})

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

// function hoverPicture(evt) {
// 	alert("You're awesome")
// }

// let picture = document.querySelector('#cat')

// picture.addEventListener('mouseover', hoverPicture)

