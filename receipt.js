// Function to generate receipt content based on the provided template
function generateReceipt(receiptNumber, date, amount, payeeName, address, fromToDate, ownerName, ownerEmail) {
    const receiptContainer = document.getElementById('receiptContainer');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-5');
    
    // Increment the month
    const nextMonthDate = new Date(fromToDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

    // Format the next month and year
    const nextMonth = nextMonthDate.toLocaleString('en-us', { month: 'long' });
    const nextYear = nextMonthDate.getFullYear();

    cardDiv.innerHTML = `
    <div class="card-body">
    <div class="rent-receipt-info">
        <h5 class="card-title">RENT RECEIPT</h5>
        <p>${date}</p>
    </div>
    <div class="receipt-details">
        <p class="card-text"><strong>Receipt No:</strong> ${receiptNumber}</p>
        <p class="card-text"><strong>Date:</strong> ${fromToDate}</p>
    </div>
</div>
<div class="card-body">
    <p class="card-text">Received sum of INR <strong class="bold-text">Rs.${amount}</strong> from <strong class="bold-text">${payeeName}</strong> towards the rent of property located at <strong class="bold-text">${address}</strong> <br> for the period for <strong class="bold-text">${fromToDate}</strong></p>
   
</div>

<div class="card-body">
    <p class="card-text"><strong>Landlord:</strong> ${ownerEmail} <br> <strong>Pan No:</strong> ${ownerName} <br></p>
</div>
    `;

    receiptContainer.appendChild(cardDiv);
}




// Function to get query parameters from the URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of urlParams) {
        queryParams[key] = value;
    }
    return queryParams;
}

// Get query parameters and generate receipts
const queryParams = getQueryParams();
const startDate = new Date(queryParams.startDate);
const endDate = new Date(queryParams.endDate);

for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setMonth(currentDate.getMonth() + 1)) {
    const formattedMonth = currentDate.toLocaleString('en-us', { month: 'long' });
    const formattedYear = currentDate.getFullYear();
    generateReceipt(
        currentDate.getMonth() + 1,
        `${formattedMonth} ${formattedYear}`,
        queryParams.totalRent,
        queryParams.tenantName,
        queryParams.propertyAddress,
        `${formattedMonth} ${formattedYear}`,
        queryParams.landlordPan, // Assuming landlordPan is a parameter
        queryParams.landlordName, // Assuming landlordName is a new parameter
        queryParams.landlordEmail // Assuming landlordEmail is a new parameter
    );
}


