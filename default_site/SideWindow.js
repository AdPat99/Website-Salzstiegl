const bookingPopup = document.getElementById("bookingPopup");
const bookbtn = document.getElementById("bookbtn");
const popupClosebtn = document.getElementById("popupClosebtn");
const popupBookbtn = document.getElementById("popupBookbtn");

// Event Listener for the "Buchen" Button and Close Button
const toggleBookingPopup = () => {
    if (bookingPopup.classList.contains("open")) {
        bookingPopup.classList.remove("open");
    } else {
        bookingPopup.classList.add("open");
    }
};

// Event Listener for the "Schließen" Button in the Popup
popupClosebtn.addEventListener("click", toggleBookingPopup);

// Event Listener for the "Buchen" Button
bookbtn.addEventListener("click", toggleBookingPopup);

// Close the Popup when the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === bookingPopup) {
        toggleBookingPopup();
    }
});