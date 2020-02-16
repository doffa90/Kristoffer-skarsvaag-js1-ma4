/*Question 3
Setting style properties on elements - Module 1 Lesson 2
Add the following HTML to a page called question3.html:

<div class="container">
    <h1>Name of game</h1>
    <div class="image" style="background-image: url('https://via.placeholder.com/1000')"></div>
    <div class="description">Description goes here</div>
</div>
.image {
    height: 200px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
Make a call to https://api.rawg.io/api/games/4200 and pass the JSON object it returns to a function called createGameDetails.
Inside createGameDetails replace the placeholder values in the HTML above with properties from the object returned from the API call.
Use either the background_image or background_image_additional property as the background image of the <div class="image"> element.
*/
const URL = "https://api.rawg.io/api/games/4200";

fetch(URL)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGameDetails(json);
	})
	.catch(function(error) {
		console.log(error);
	});

function createGameDetails(json) {
	const gameName = document.querySelector("h1");
	gameName.innerHTML = json.name;

	const imgURL = document.querySelector(".image");
	imgURL.style.backgroundImage = `url("${json.background_image}")`;

	const description = document.querySelector(".description");
	description.innerHTML = json.description;
}
