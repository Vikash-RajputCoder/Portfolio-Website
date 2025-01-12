document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message, Vikash will contact you soon!');
        form.reset();
    });
});
