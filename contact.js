const form = document.getElementById("contact-form");

const fields = {
    name: {
        input: document.getElementById("name"),
        error: document.getElementById("name-error"),
        validate(value) {
            return value.trim().length >= 2;
        },
        message: "Name must be at least 2 characters."
    },
    email: {
        input: document.getElementById("email"),
        error: document.getElementById("email-error"),
        validate(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Please enter a valid email address."
    },
    message: {
        input: document.getElementById("message"),
        error: document.getElementById("message-error"),
        validate(value) {
            return value.trim().length >= 10;
        },
        message: "Message must be at least 10 characters."
    }
};

// Real-time validation
Object.values(fields).forEach(field => {
    field.input.addEventListener("input", () => {
        const value = field.input.value;

        if (field.validate(value)) {
            field.input.classList.remove("invalid");
            field.input.classList.add("valid");
            field.error.textContent = "";
        } else {
            field.input.classList.remove("valid");
            field.input.classList.add("invalid");
            field.error.textContent = field.message;
        }
    });
});

// Prevent form submission if invalid
form.addEventListener("submit", (e) => {
    let valid = true;

    Object.values(fields).forEach(field => {
        const value = field.input.value;

        if (!field.validate(value)) {
            valid = false;
            field.input.classList.add("invalid");
            field.error.textContent = field.message;
        }
    });

    if (!valid) e.preventDefault();
});
