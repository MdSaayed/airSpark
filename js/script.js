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
    const closeModal = document.querySelector('.video-modal .close');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const videoUrl = button.getAttribute('data-video-url');
            console.log("Video URL:", videoUrl); // Debugging step
            iframe.src = videoUrl;
            modal.classList.add('active');
            console.log("Modal class added:", modal.classList.contains('active')); // Debugging step
        });
    });

    closeModal.addEventListener('click', function () {
        modal.classList.remove('active');
        iframe.src = ''; // Stop the video
    });

    // Close modal when clicking outside the video content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            iframe.src = ''; // Stop the video
        }
    });
});






