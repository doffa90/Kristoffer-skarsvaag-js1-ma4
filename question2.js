/*Question 2
Add the following element to a page called question2.html:

<div class="results"></div>
Make a call to https://api.rawg.io/api/games and pass the JSON object it returns to a function called createGames.

For each game object in the results, the createGames function should create the following HTML in a loop. Replace the placeholder values with the relevant properties from each object:

<div class="game">
    <h2>Name of game</h2>
    <img src="/path/to/image" alt="Name of game">
</div>
After the loop, all the HTML that was created should be assigned as the innerHTML value to the element above.*/

const URL = "https://api.rawg.io/api/games";

fetch(URL)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGames(json);
		console.dir(json);
	})
	.catch(function(error) {
		console.dir(error);
	});

function createGames(json) {
	const results = json.results;
	console.dir(results);

	const resultsContainer = document.querySelector(".results");

	let html = "";

	results.forEach((result) => {
		html += `<div class="game">
                <h2>${result.name}</h2>
                <img src="${result.background_image}" alt="${result.name}">
              </div>`;
	});
	resultsContainer.innerHTML = html;
}
