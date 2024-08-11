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


// faq
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const faqItem = item.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-toggle-icon i');
        icon.style.transition = 'transform 300ms ease-in-out';

        // Toggle the answer visibility
        if (answer.classList.contains('max-h-0')) {
            answer.classList.remove('max-h-0');
            answer.classList.add('max-h-screen'); // Adjust as necessary
            icon.style.transform = 'rotate(135deg)';
        } else {
            answer.classList.remove('max-h-screen');
            answer.classList.add('max-h-0');
            icon.style.transform = 'rotate(0deg)';
        }
    });
});
