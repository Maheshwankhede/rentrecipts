// Function to generate receipts
function generateReceipts() {
    // Get user-entered details
    const tenantName = document.getElementById('tenantName').value;
    const propertyAddress = document.getElementById('propertyAddress').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const totalRent = document.getElementById('totalRent').value;
    const landlordName = document.getElementById('landlordName').value; // Updated field
    const landlordEmail = document.getElementById('landlordEmail').value; // Updated field
    const landlordPan = document.getElementById('landlordPan').value;
    // Validate inputs
    if (!tenantName || !propertyAddress || !startDate || !endDate || !totalRent || !landlordName || !landlordEmail) {
        alert('Please fill in all required fields.');
        return;
    }

    // Build URL with query parameters
    const queryParams = `?tenantName=${encodeURIComponent(tenantName)}&propertyAddress=${encodeURIComponent(propertyAddress)}&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}&totalRent=${encodeURIComponent(totalRent)}&landlordPan=${encodeURIComponent(landlordPan)}&landlordName=${encodeURIComponent(landlordName)}&landlordEmail=${encodeURIComponent(landlordEmail)}`;

    // Redirect to receipt.html with query parameters
    window.location.href = `receipt.html${queryParams}`;

    // Log the generated URL for debugging
    console.log('Generated URL:', `receipt.html${queryParams}`);
}
