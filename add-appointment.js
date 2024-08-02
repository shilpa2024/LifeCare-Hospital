document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim();
    const appointmentDate = document.getElementById('appointment-date').value;
    const email = document.getElementById('email').value.trim();
    const disease = document.getElementById('disease').value.trim();
    const address = document.getElementById('address').value.trim();

    // Check if all required fields are filled
    if (!firstName || !lastName || !age || !gender || !phone || !appointmentDate || !email || !disease || !address) {
        alert('Please fill out all required fields.');
        return;
    }

    // Validate phone number format
    const phonePattern = /^\+?\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Invalid phone number format. Must be between 10 and 15 digits.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email format.');
        return;
    }

    // Get existing appointments from localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Add new appointment
    const newAppointment = {
        id: appointments.length ? appointments[appointments.length - 1].id + 1 : 1,
        firstName,
        lastName,
        age,
        gender,
        phone,
        appointmentDate,
        email,
        disease,
        address
    };
    appointments.push(newAppointment);

    // Save updated appointments list to localStorage
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Show success alert
    alert('Appointment added successfully!');

    // Redirect to the view-appointment.html page
    window.location.href = 'view-appointment.html';
});
