document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulating a successful message send
    const successMessage = document.querySelector(".success");
    const errorMessage = document.querySelector(".error");

    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    // Validate input fields (simple check)
    if (name && email && message) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }

    // Clear the form fields after submit
    document.getElementById("contact-form").reset();
});
