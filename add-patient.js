document.getElementById('patient-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    // Check if all required fields are filled
    if (!firstName || !lastName || !dob || !gender || !phone || !address) {
        alert('Please fill out all required fields.');
        return;
    }

    // Validate phone number format
    const phonePattern = /^\+?\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Invalid phone number format. Must be between 10 and 15 digits.');
        return;
    }

    // Get existing patients from localStorage
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    // Add new patient
    const newPatient = {
        id: patients.length ? patients[patients.length - 1].id + 1 : 1,
        firstName,
        lastName,
        dob,
        gender,
        phone,
        address
    };
    patients.push(newPatient);

    // Save updated patients list to localStorage
    localStorage.setItem('patients', JSON.stringify(patients));

    // Show success alert
    alert('Registration successful!');

    // Redirect to the view-patient.html page
    window.location.href = 'view-patient.html';
});
