// Get references to the input fields in the side window
const popupFirstNameInput = document.getElementById("popupFirstName");
const popupLastNameInput = document.getElementById("popupLastName");
const popupPhoneInput = document.getElementById("popupPhone");
const popupOptionInput = document.querySelector('input[name="popupOptions"]:checked');

// Get the "Weiter" button in the side window
const popupBookbtn = document.getElementById("popupBookbtn");

// Function to copy data from side window to main page
function copyData() {
    // Store data from side window in sessionStorage
    sessionStorage.setItem("popupFirstName", popupFirstNameInput.value);
    sessionStorage.setItem("popupLastName", popupLastNameInput.value);
    sessionStorage.setItem("popupPhone", popupPhoneInput.value);

    if (popupOptionInput) {
        sessionStorage.setItem("popupOption", popupOptionInput.value);
    }
}

// Event listener for the "Weiter" button
popupBookbtn.addEventListener("click", function () {
    copyData();
    // Redirect to buchen.html
    window.location.href = "buchen.html";
});
