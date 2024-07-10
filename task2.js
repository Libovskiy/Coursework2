document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('https://jsonplaceholder.typicode.com/posts', { // Placeholder URL for testing
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for your message!');
    })
    .catch((error) => {
        console.error('Error:', error.message);
        alert('There was an error submitting the form: ' + error.message);
    });
});

function playMusic() {
    console.log('Music is playing!');
}

function pauseMusic() {
    console.log('Music is paused!');
}