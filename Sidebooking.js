// Get references to the input fields in the side window
const popupFirstNameInput = document.getElementById("popupFirstName");
const popupLastNameInput = document.getElementById("popupLastName");
const popupPhoneInput = document.getElementById("popupPhone");
const popupOptionInput = document.querySelector('input[name="popupOptions"]:checked');

// Function to copy data from side window to sessionStorage
function copyData() {
    // Store data from the side window in sessionStorage
    sessionStorage.setItem("popupFirstName", popupFirstNameInput.value);
    sessionStorage.setItem("popupLastName", popupLastNameInput.value);
    sessionStorage.setItem("popupPhone", popupPhoneInput.value);

    if (popupOptionInput) {
        sessionStorage.setItem("popupOption", popupOptionInput.value);
    }
}

// Event listener for the "Weiter" button
document.getElementById("popupBookbtn").addEventListener("click", function () {
    copyData();
    // Redirect to buchen.html
    window.location.href = "buchen.html";
});
