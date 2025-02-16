
// Task 1
document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("user-form");

    // Task 2
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Task 3
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        let userData = { name, email, message };
        console.log("Form Submitted", userData);
        alert("Form Submitted Successfully!");
        form.reset();
    });
});