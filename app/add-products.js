import './add-products.scss';

// Function to update character count for description field
document.addEventListener("DOMContentLoaded", () => {
    const descriptionField = document.getElementById("productDescription");
    const charCount = document.getElementById("charCount");

    descriptionField.addEventListener("input", () => {
        const remaining = 100 - descriptionField.value.length;
        charCount.textContent = `${remaining} characters remaining`;
    });

    // Basic form validation
    const form = document.getElementById("add-product-form");
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});
