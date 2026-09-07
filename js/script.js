// ================= CONTACT FORM =================
// ================= CONTACT FORM =================

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check required fields
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    // Show sending message
    formMessage.textContent = "Sending message...";
    formMessage.style.color = "#a855f7";

    // Disable button while sending
    const submitButton = contactForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    // Send email using EmailJS
    emailjs.sendForm(
        "service_1foj5mn",
        "template_qjnq2g3",
        contactForm
    )
    .then(function (response) {

        console.log("SUCCESS!", response.status, response.text);

        formMessage.textContent =
            "Message delivered 🚀 I’ll get back to you soon!";
        formMessage.style.color = "#22c55e";

        // Clear form
        contactForm.reset();

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message <span>→</span>';

    })
    .catch(function (error) {

        console.error("FAILED...", error);

        formMessage.textContent =
            "Something went wrong. Please try again.";
        formMessage.style.color = "#ef4444";

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message <span>→</span>';
    });

});

// ================= NAVBAR GLASS EFFECT =================
// ================= NAVBAR GLASS EFFECT =================


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("glass");
    } else {
        navbar.classList.remove("glass");
    }
});
