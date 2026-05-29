// ================================
// Smooth Navigation Scroll
// ================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ================================
// Header Shadow on Scroll
// ================================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 20) {
        header.style.boxShadow =
            '0 6px 25px rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow =
            '0 4px 20px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.05)';
    }
});


// ================================
// Pricing Button Interaction
// ================================

const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {

    button.addEventListener('click', () => {

        const product =
            button.parentElement.querySelector('h3').textContent;

        button.textContent = '✓ Added';
        button.style.background = '#1f5e3b';

        setTimeout(() => {
            button.textContent = 'Select';
            button.style.background = '#2b7a4b';
        }, 2000);

        alert(`🌿 ${product} added to your selection!`);
    });
});


// ================================
// Email Validation
// ================================

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    const validEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email)) {

        e.preventDefault();

        emailInput.style.borderColor = 'red';

        alert('Please enter a valid email address.');

    } else {

        emailInput.style.borderColor = '#2b7a4b';
    }
});


// ================================
// Fade-In Animation on Scroll
// ================================

const animatedElements = document.querySelectorAll(
    '.feature-card, .price-card, .video-wrapper, .form-section'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {

    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition =
        'all 0.8s ease';

    observer.observe(element);
});


// ================================
// Dynamic Year in Footer
// ================================

const footerText = document.querySelector('footer p');

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} EcoFlow — smart hydration for a better future 🌱 | Designed with purpose & sustainability`;