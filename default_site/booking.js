// booking.js
function sendEmail() {
    // Erfassen Sie die ausgewählten Informationen aus dem Formular
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const arrivalDate = document.getElementById("arrivalDate").value;
    const departureDate = document.getElementById("departureDate").value;
    const numPersons = document.getElementById("inputState1").value;
    const numRooms = document.getElementById("inputState2").value;
    const additionalRequests = document.getElementById("textAreaExample").value;

    // Überprüfen Sie, ob alle erforderlichen Felder ausgefüllt sind
    if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        phoneNumber.trim() === "" ||
        arrivalDate.trim() === "" ||
        departureDate.trim() === "" ||
        numPersons.trim() === "" ||
        numRooms.trim() === ""
    ) {
        alert("Bitte füllen Sie alle erforderlichen Felder aus.");
        return;
    }

    // Erstellen Sie den E-Mail-Text mit den erfassten Informationen
    const emailText = `
        Vorname: ${firstName}
        Nachname: ${lastName}
        Telefonnummer: ${phoneNumber}
        Anreise: ${arrivalDate}
        Abreise: ${departureDate}
        Anzahl von Personen: ${numPersons}
        Anzahl der Zimmer: ${numRooms}
        Weitere Wünsche: ${additionalRequests}
    `;

    // Erstellen Sie die E-Mail-Adresse, an die die E-Mail gesendet werden soll
    const emailRecipient = "Test@Test.com";

    // Erstellen Sie den Betreff der E-Mail (Sendegrund)
    const emailSubject = "Zimmer buchen";

    // Öffnen Sie das E-Mail-Programm des Benutzers mit den Informationen
    window.location.href = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailText)}`;
}

document.getElementById("bookbtn").addEventListener("click", sendEmail);
