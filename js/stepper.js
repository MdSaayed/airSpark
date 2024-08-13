document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const forms = document.querySelectorAll('.w-full.md\\:w-7\\/12');
    const nextButtons = document.querySelectorAll('.form-btn.btn');
    const backButtons = document.querySelectorAll('.form-btn.btn-white');

    let currentStep = 0;

    function setActiveStep(index) {
        // Update active step in the stepper
        steps.forEach((step, i) => {
            if (i <= index) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Show the correct form and hide the others
        forms.forEach((form, i) => {
            form.classList.toggle('hidden', i !== index);
        });

        currentStep = index;
    }

    // Add event listeners to next buttons
    nextButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission for demonstration
            if (currentStep < steps.length - 1) {
                setActiveStep(currentStep + 1);
            }
        });
    });

    // Add event listeners to back buttons
    backButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission for demonstration
            if (currentStep > 0) {
                setActiveStep(currentStep - 1);
            }
        });
    });

    // Initialize the first step as active
    setActiveStep(0);
});
