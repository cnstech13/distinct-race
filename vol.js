// Volunteer Form Validation

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const fullName = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();

    // Validation
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    // Success Message
    alert("🎉 Thank you for applying to volunteer! Your application has been submitted successfully.");

    // Reset Form
    form.reset();
});

// Email Validation Function
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}