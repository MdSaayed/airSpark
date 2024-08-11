document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Popup
    const playButtons = document.querySelectorAll('.play-button');
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const closeModal = document.querySelector('.video-modal .close');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const videoUrl = button.getAttribute('data-video-url');
            console.log("Video URL:", videoUrl); // Debugging step
            if (iframe) {
                iframe.src = videoUrl;
            }
            if (modal) {
                modal.classList.add('active');
                console.log("Modal class added:", modal.classList.contains('active')); // Debugging step
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            if (modal) {
                modal.classList.remove('active');
            }
            if (iframe) {
                iframe.src = ''; // Stop the video
            }
        });
    }

    // Close modal when clicking outside the video content
    window.addEventListener('click', function (event) {
        if (modal && event.target === modal) {
            modal.classList.remove('active');
            if (iframe) {
                iframe.src = ''; // Stop the video
            }
        }
    });
});
