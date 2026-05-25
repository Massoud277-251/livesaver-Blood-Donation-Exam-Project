document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = form.querySelector('input[type="text"]').value;

            if (name.trim() !== "") {
                alert("Thank you, " + name + "! Your blood request has been sent successfully.");
            } else {
                alert("Your blood request has been sent successfully.");
            }

            form.reset();
        });
    }
});