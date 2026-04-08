document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form — mailto fallback handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const org = document.getElementById('org').value;
            const role = document.getElementById('role').value;
            const interest = document.getElementById('interest').value;
            const summary = document.getElementById('summary').value;

            const subject = encodeURIComponent('Strategic Briefing Request — ' + org);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Organisation: ' + org + '\n' +
                'Role: ' + role + '\n' +
                'Area of Interest: ' + interest + '\n\n' +
                'Summary:\n' + summary
            );

            window.location.href = 'mailto:info@regionalconsultancy.com.au?subject=' + subject + '&body=' + body;
        });
    }
});
