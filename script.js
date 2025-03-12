// Dark Mode Toggle (applies to all pages)
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Dropdown Menu Toggle
    const dropdown = document.getElementById("subject");
    if (dropdown) {
        dropdown.addEventListener("change", function () {
            console.log("Dropdown changed to: ", dropdown.value);
        });
    }

    // Checkbox Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const agreeCheckbox = document.getElementById("agree");
            if (!agreeCheckbox.checked) {
                alert("You must agree to the terms and conditions before submitting.");
                event.preventDefault();
            }
        });
    }
});
