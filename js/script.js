// nav menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});


// popup
document.addEventListener("DOMContentLoaded", function () {
    const playButtons = document.querySelectorAll('.play-button');
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const closeBtn = document.querySelector('.close');

    playButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const videoUrl = this.previousElementSibling.getAttribute('href');
            iframe.src = videoUrl + "?autoplay=1";
            modal.style.display = "flex"; // Ensure the modal uses flex display for centering
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
        iframe.src = "";
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    });
});

