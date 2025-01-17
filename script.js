// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

// Form Submission Logic
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        message: message,
    })
    .then(() => {
        document.querySelector(".success").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.getElementById("contact-form").reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        document.querySelector(".success").style.display = "none";
        document.querySelector(".error").style.display = "block";
    });
});
