function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("contact-form").reset();
    return false;
}
