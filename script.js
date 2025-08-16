// Remove smooth scroll logic — pages are separate now

// Lazy loading for images
const lazyImages = document.querySelectorAll('.lazy');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});
lazyImages.forEach(img => imageObserver.observe(img));

// Form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        form.reset();
    });
});

// Add to cart functionality
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Add to Cart')) {
        btn.addEventListener('click', function() {
            const productName = this.closest('.card').querySelector('.card-title').textContent;
            alert(`${productName} added to cart!`);
        });
    }
});
