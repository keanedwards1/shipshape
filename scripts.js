$(document).ready(function() {
    function updatePrice() {
        const squareFootage = $('input[name="squareFootage"]:checked').val();
        const stories = $('input[name="stories"]:checked').val();

        let price;

        // Calculate price based on square footage and stories
        if (squareFootage === '1000' && stories === '1') {
            price = 'Price for 1,000+ sq ft, 1 story';
        } else if (squareFootage === '1000' && stories === '2') {
            price = 'Price for 1,000+ sq ft, 2 stories';
        } else if (squareFootage === '1000' && stories === '3') {
            price = 'Price for 1,000+ sq ft, 3 stories';
        } else if (squareFootage === '2000' && stories === '1') {
            price = 'Price for 2,000+ sq ft, 1 story';
        } else if (squareFootage === '2000' && stories === '2') {
            price = 'Price for 2,000+ sq ft, 2 stories';
        } else if (squareFootage === '2000' && stories === '3') {
            price = 'Price for 2,000+ sq ft, 3 stories';
        } else if (squareFootage === '3000' && stories === '1') {
            price = 'Price for 3,000+ sq ft, 1 story';
        } else if (squareFootage === '3000' && stories === '2') {
            price = 'Price for 3,000+ sq ft, 2 stories';
        } else if (squareFootage === '3000' && stories === '3') {
            price = 'Price for 3,000+ sq ft, 3 stories';
        } else {
            price = 'Please select an option.';
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

