$(document).ready(function() {
    function updatePrice() {
        const squareFootage = $('input[name="squareFootage"]:checked').val();
        const stories = $('input[name="stories"]:checked').val();

        let price;

        // Calculate price based on square footage and stories
        if (squareFootage === '1000' && stories === '1') {
            price = '$115';
        } else if (squareFootage === '1000' && stories === '2') {
            price = '$165';
        } else if (squareFootage === '1000' && stories === '3') {
            price = '$215';
        } else if (squareFootage === '2000' && stories === '1') {
            price = '$215';
        } else if (squareFootage === '2000' && stories === '2') {
            price = '$265';
        } else if (squareFootage === '2000' && stories === '3') {
            price = '$315';
        } else if (squareFootage === '3000' && stories === '1') {
            price = '$315';
        } else if (squareFootage === '3000' && stories === '2') {
            price = '$365';
        } else if (squareFootage === '3000' && stories === '3') {
            price = '$415';
        } else {
            price = '';
        }

        // Update the estimated price text
        $('#estimatedPrice').text(`Estimated Price: ${price}`);
    }

    // Event listener for changes in the radio buttons
    $('input[type="radio"]').change(function() {
        updatePrice();
    });

    // Initialize with default values
    updatePrice();
});


















/* tooltip */
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});




















// Nav-link:
/* document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Select the nav-link elements by their IDs
    var indexLink = document.getElementById('index');
    var infoLink = document.getElementById('info');
    var contactLink = document.getElementById('contact');

    // Find and remove the active class from the currently active link
    var currentActiveLink = document.querySelector('.nav-link.active');
    if (currentActiveLink) {
        currentActiveLink.classList.remove('active');
    }

    // Apply active class based on the current page
    if (currentPageUrl.includes('index.html')) {
        indexLink.classList.add('active');
    } else if (currentPageUrl.includes('info.html')) {
        infoLink.classList.add('active');
    } else if (currentPageUrl.includes('contact.html')) {
        contactLink.classList.add('active');
    } 
});*/

























/* email */

const emailInput = document.getElementById('emailInput');
const submitButton = document.querySelector('.button');
const emailHelp = document.getElementById('emailHelp');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    if (isValidEmail(email)) {
        submitButton.disabled = false;
        emailHelp.style.display = 'none';
    } else {
        submitButton.disabled = true;
        emailHelp.style.display = email ? 'block' : 'none';
    }
});

document.querySelector('.button').addEventListener('click', () => {
    // Get the email from the input field
    const email = document.getElementById('emailInput').value;

    // Check if the email is not empty
    if (email) {
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            alert('Email sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send email.');
        });
    } else {
        alert('Please enter an email address.');
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

























 

