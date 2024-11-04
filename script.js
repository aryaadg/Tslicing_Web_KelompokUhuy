document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const address = document.getElementById('address').value;
    const queryType = document.getElementById('queryType').value;
    const message = document.getElementById('message').value;
    const termsChecked = document.getElementById('terms').checked;

    if (firstname && lastname && address && queryType && message && termsChecked) {
        document.getElementById('successMessage').textContent = 'Thank you! Your message has been sent.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('successMessage').textContent = 'Please fill out all fields and agree to the terms.';
    }
});
