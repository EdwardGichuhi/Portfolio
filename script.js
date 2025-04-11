document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // Learn More About Me button functionality
    const learnMoreBtn = document.querySelector('.btn[data-page="about"]');
    learnMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show the About page
        document.getElementById('about').classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero image slideshow
    const heroImage1 = document.getElementById('heroImage1');
    const heroImage2 = document.getElementById('heroImage2');
    let currentImage = 1;

    function toggleHeroImage() {
        if (currentImage === 1) {
            heroImage1.classList.remove('active');
            heroImage1.classList.add('inactive');
            heroImage2.classList.remove('inactive');
            heroImage2.classList.add('active');
            currentImage = 2;
        } else {
            heroImage2.classList.remove('active');
            heroImage2.classList.add('inactive');
            heroImage1.classList.remove('inactive');
            heroImage1.classList.add('active');
            currentImage = 1;
        }
    }

    // Start the slideshow
    setInterval(toggleHeroImage, 3000); // Change image every 3 seconds
});