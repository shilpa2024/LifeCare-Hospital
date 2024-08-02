document.addEventListener('DOMContentLoaded', () => {
    
    // Function to render patient data
    function renderPatients() {
        const tableBody = document.querySelector('#patients-table tbody');
        const patients = JSON.parse(localStorage.getItem('patients')) || [];
        tableBody.innerHTML = ''; // Clear existing content

        patients.forEach(patient => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.firstName}</td>
                <td>${patient.lastName}</td>
                <td>${patient.dob}</td>
                <td>${patient.gender}</td>
                <td>${patient.phone}</td>
                <td>${patient.address}</td>
                <td class="actions">
                    <button class="delete-button" onclick="deletePatient(${patient.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to handle deleting a patient
    window.deletePatient = function(id) {
        const confirmDelete = confirm(`Are you sure you want to delete patient with ID: ${id}?`);
        if (confirmDelete) {
            // Get existing patients
            let patients = JSON.parse(localStorage.getItem('patients')) || [];
            // Remove patient from the array
            patients = patients.filter(patient => patient.id !== id);
            // Save updated patients list to localStorage
            localStorage.setItem('patients', JSON.stringify(patients));
            // Re-render table with updated data
            renderPatients();
        }
    };

    // Render the patient data on page load
    renderPatients();
});
