/*Question 1
Add the following HTML and CSS to a page called question1.html.

<form id="contactForm">
    <div>
        <input type="text" id="firstName" placeholder="First name (minimum 2 characters)" />
        <div id="firstNameError" class="error">Your first name must be at least 2 characters</div>
    </div> 
    <div>
        <button type="submit">Submit</button>
    </div>
</form>
.error {
    color: red;
    display: none;
}
Write code that checks that the firstName input's value is at least 2 characters long when the form is submitted.

Show/hide the error message every time the validation runs.

*/
const form = document.querySelector("#contactForm");
form.addEventListener("submit", checkForm);

function checkForm(event) {
	const firstName = document.querySelector("#firstName");
	const errorMsg = document.querySelector("#firstNameError");
	const firstNameValue = firstName.value;

	event.preventDefault();
	console.log("The form was submitted");

	if (checkInput(firstNameValue) === true) {
		errorMsg.style.display = "none";
	} else {
		errorMsg.style.display = "block";
	}
}

function checkInput(input) {
	const trimmedInput = input.trim();

	if (trimmedInput.length >= 2) {
		return true;
	} else {
		return false;
	}
}
