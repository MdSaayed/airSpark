// JavaScript to manage active step
const steps = document.querySelectorAll('.stepper-item');
const stepLines = document.querySelectorAll('.step-line');

// Function to set active step
function setActiveStep(index) {
    steps.forEach((step, i) => {
        if (i === index) {
            step.classList.add('z-30');
            step.classList.remove('z-20');
        } else {
            step.classList.add('z-20');
            step.classList.remove('z-30');
        }
    });

    stepLines.forEach((line, i) => {
        if (i === index) {
            line.classList.add('bg-[#D1FC71]');
            line.classList.remove('bg-[#DADADA]');
            line.classList.add('z-20');
            line.classList.remove('z-10');
        } else {
            line.classList.add('bg-[#DADADA]');
            line.classList.remove('bg-[#D1FC71]');
            line.classList.add('z-10');
            line.classList.remove('z-20');
        }
    });
}

// Example: Set the first step as active
setActiveStep(0);

console.log(steps);
