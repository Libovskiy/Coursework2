let message = "hello , here is my message"
console.log(message)

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.onsubmit = async function(event) {
        event.preventDefault();
        responseMessage.innerText = "Sending...";

        try {
            const response = await fetch("https://example.com/submit-form", {
                method: "POST",
                body: new FormData(form)
            });

            const result = await response.text();
            responseMessage.innerText = response.ok ? "Success: " + result : "Error: " + response.statusText;
        } catch (error) {
            responseMessage.innerText = "There was an error. Please try again.";
        }
    };
});