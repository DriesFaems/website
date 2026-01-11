// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 767 &&
            !navToggle.contains(e.target) &&
            !navMenu.contains(e.target)) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore empty hash links
        if (href === '#' || href === '#main-content') {
            return;
        }

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Get header height for offset
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;

            // Calculate position
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Spy - Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinksForSpy = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinksForSpy.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // If at the very top, remove all active states
    if (window.scrollY < 100) {
        navLinksForSpy.forEach(link => link.classList.remove('active'));
    }
}

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        highlightNavigation();
    });
});

// Initial call
highlightNavigation();

// ===================================
// Intersection Observer for Fade-In Animations
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, stop observing to prevent re-triggering
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
const fadeElements = document.querySelectorAll('.section');
fadeElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Also observe research cards and publication items for staggered effect
const cards = document.querySelectorAll('.research-card, .publication-item');
cards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// Header Shadow on Scroll
// ===================================
const header = document.querySelector('.header');

function updateHeaderShadow() {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
}

let headerScrollTimeout;
window.addEventListener('scroll', () => {
    if (headerScrollTimeout) {
        window.cancelAnimationFrame(headerScrollTimeout);
    }
    headerScrollTimeout = window.requestAnimationFrame(() => {
        updateHeaderShadow();
    });
});

// Initial call
updateHeaderShadow();

// ===================================
// Accessibility: Keyboard Navigation Enhancement
// ===================================
// Add visible focus indicators for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// External Links - Open in New Tab with Security
// ===================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Only apply to links that don't already have target="_blank"
    if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================================
// Performance Optimization: Preload Critical Resources
// ===================================
// This could be expanded to preload images or other resources
// For now, we'll ensure fonts are loaded efficiently
if ('fonts' in document) {
    // Check if fonts are loaded
    document.fonts.ready.then(() => {
        console.log('Fonts loaded successfully');
    });
}

// ===================================
// Console Message (Optional)
// ===================================
console.log('%cProf. Dr. Dries Faems - Professional Website', 'color: #002855; font-size: 16px; font-weight: bold;');
console.log('%cWHU – Otto Beisheim School of Management', 'color: #555555; font-size: 12px;');
console.log('%cWebsite by Claude Code', 'color: #0066cc; font-size: 10px;');

// ===================================
// Language Toggle Functionality
// ===================================
const langButtons = document.querySelectorAll('.lang-btn');
const langElements = {
    en: document.querySelectorAll('.lang-en'),
    de: document.querySelectorAll('.lang-de')
};

// Get saved language or default to English
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set active language
function setLanguage(lang) {
    // Update localStorage
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update button states
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Show/hide content
    langElements.en.forEach(el => {
        if (lang === 'en') {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    langElements.de.forEach(el => {
        if (lang === 'de') {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Update page title
    const title = lang === 'en'
        ? 'GenAI Expert Prof. Dr. Dries Faems | AI Workshops & Training | WHU'
        : 'GenAI-Experte Prof. Dr. Dries Faems | KI-Workshops & Training | WHU';
    document.title = title;
}

// Language toggle event listeners
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// Initialize language on page load
setLanguage(getCurrentLanguage());