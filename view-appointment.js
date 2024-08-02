document.addEventListener('DOMContentLoaded', () => {
    // Function to render appointment data
    function renderAppointments() {
        const tableBody = document.querySelector('#appointments-table tbody');
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        tableBody.innerHTML = ''; // Clear existing content

        appointments.forEach(appointment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${appointment.firstName}</td>
                <td>${appointment.lastName}</td>
                <td>${appointment.age}</td>
                <td>${appointment.gender}</td>
                <td>${appointment.phone}</td>
                <td>${appointment.appointmentDate}</td>
                <td>${appointment.email}</td>
                <td>${appointment.disease}</td>
                <td>${appointment.address}</td>
                <td class="actions">
                    <button class="delete-button" onclick="deleteAppointment(${appointment.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to handle deleting an appointment
    window.deleteAppointment = function(id) {
        const confirmDelete = confirm(`Are you sure you want to delete appointment with ID: ${id}?`);
        if (confirmDelete) {
            // Get existing appointments
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            // Remove appointment from the array
            appointments = appointments.filter(appointment => appointment.id !== id);
            // Save updated appointments list to localStorage
            localStorage.setItem('appointments', JSON.stringify(appointments));
            // Re-render table with updated data
            renderAppointments();
        }
    };

    // Render the appointment data on page load
    renderAppointments();
});
