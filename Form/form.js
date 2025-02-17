
let submissions = [];

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const submissionsContainer = document.getElementById('submissions');

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');

    if (!name.value.trim()) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim() || !emailPattern.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    if (!message.value.trim()) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    return isValid;
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {

        const submission = {
            id: Date.now(),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message
        };

        submissions.push(submission);

        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        updateSubmissionsDisplay();

        form.reset();
    }
});

function updateSubmissionsDisplay() {
    submissionsContainer.innerHTML = '<h2>Previous Submissions</h2>';

    submissions.forEach(sub => {
        const submissionElement = document.createElement('div');
        submissionElement.className = 'submission-item';
        submissionElement.innerHTML = `
            <p><strong>Name:</strong> ${sub.name}</p>
            <p><strong>Email:</strong> ${sub.email}</p>
            <p><strong>Message:</strong> ${sub.message}</p>
        `;

        submissionsContainer.appendChild(submissionElement);
    });
}

const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input', function () {
        const errorElement = document.getElementById(`${input.id}Error`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    });
});