/**
 * SMART CHOICE INTERNET - PREMIUM INTERACTIVE EXPERIENCE
 * GSAP Animations + Custom Interactions
 */

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initFAQ();
    initPopups();
    initChatbot();
    initScrollCTA();
    initHeroAnimations();
    initRevealOnScroll();
    triggerCallPopup();
    initContactForm();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// ============================================
// HERO ANIMATIONS (GSAP)
// ============================================
function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;

    // Animate hero content
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero-badge', {
            opacity: 0,
            y: 30,
            duration: 0.8
        })
        .from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
        }, '-=0.5')
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.6')
        .from('.hero-cta-group', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.5')
        .from('.hero-disclaimer', {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, '-=0.4');

    // Animate floating cards
    gsap.from('.floating-card', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Continuous floating animation for cards
    gsap.to('.card-1', {
        y: -20,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.card-2', {
        y: -25,
        rotation: -2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
    });

    gsap.to('.card-3', {
        y: -18,
        rotation: 1,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
    });
}

// ============================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================
function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate service cards
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Animate process timeline
    gsap.utils.toArray('.process-step').forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out'
        });
    });

    // Animate issue cards
    gsap.utils.toArray('.issue-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            delay: index * 0.08,
            ease: 'power3.out'
        });
    });

    // Animate why items
    gsap.utils.toArray('.why-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -40,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Animate stat cards
    gsap.utils.toArray('.stat-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out(1.7)'
        });

        // Animate numbers
        const number = card.querySelector('.stat-number');
        if (number) {
            const text = number.textContent;
            ScrollTrigger.create({
                trigger: card,
                start: 'top 85%',
                onEnter: () => animateNumber(number, text)
            });
        }
    });

    // CTA sections animation
    gsap.utils.toArray('.cta-content-block, .cta-box').forEach(cta => {
        gsap.from(cta, {
            scrollTrigger: {
                trigger: cta,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Section headers
    gsap.utils.toArray('.section-header, .section-header-center').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// ============================================
// REVEAL ON SCROLL (Intersection Observer)
// ============================================
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-slide');
    
    if (revealElements.length === 0) return;

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// ANIMATE NUMBERS
// ============================================
function animateNumber(element, targetText) {
    // Extract numeric value
    const match = targetText.match(/[\d,]+/);
    if (!match) {
        element.textContent = targetText;
        return;
    }

    const numberText = match[0].replace(/,/g, '');
    const targetNumber = parseInt(numberText);
    const prefix = targetText.slice(0, match.index);
    const suffix = targetText.slice(match.index + match[0].length);

    if (isNaN(targetNumber)) {
        element.textContent = targetText;
        return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
        current += increment;
        step++;

        if (step >= steps) {
            clearInterval(timer);
            element.textContent = targetText;
        } else {
            const displayNumber = Math.floor(current).toLocaleString();
            element.textContent = prefix + displayNumber + suffix;
        }
    }, duration / steps);
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// CALL POPUP
// ============================================
function initPopups() {
    const popupOverlay = document.getElementById('callPopupOverlay');
    const popupClose = document.getElementById('popupClose');

    if (popupClose && popupOverlay) {
        popupClose.addEventListener('click', () => {
            popupOverlay.classList.remove('active');
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('active');
            }
        });
    }
}

// Trigger popup after delay
function triggerCallPopup() {
    const popupOverlay = document.getElementById('callPopupOverlay');
    
    if (popupOverlay && !sessionStorage.getItem('popupShown')) {
        // Show popup after 5 seconds on all pages
        setTimeout(() => {
            popupOverlay.classList.add('active');
            sessionStorage.setItem('popupShown', 'true');
        }, 5000);
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Here you would typically send the data to your server
            // For now, we'll just simulate a successful submission
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Optional: Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
            
            // Log form data (for demonstration)
            console.log('Form submitted with data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        });
    }
}

// ============================================
// CHATBOT WIDGET
// ============================================
function initChatbot() {
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatOptions = document.querySelectorAll('.chat-option');

    if (chatbotTrigger && chatbotWindow) {
        chatbotTrigger.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });
    }

    // Handle chat option clicks
    chatOptions.forEach(option => {
        option.addEventListener('click', function() {
            const action = this.dataset.action;
            
            if (action === 'call') {
                // Redirect to call
                window.location.href = 'tel:+18883704880';
            }
        });
    });

    // Close chatbot when clicking outside
    document.addEventListener('click', (e) => {
        const chatbotWidget = document.getElementById('chatbotWidget');
        if (chatbotWidget && !chatbotWidget.contains(e.target)) {
            chatbotWindow.classList.remove('active');
        }
    });
}

// ============================================
// SCROLL CTA BAR
// ============================================
function initScrollCTA() {
    const scrollCTABar = document.getElementById('scrollCtaBar');
    
    if (!scrollCTABar) return;

    let scrollThreshold = window.innerHeight * 1.5;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > scrollThreshold) {
            scrollCTABar.classList.add('visible');
        } else {
            scrollCTABar.classList.remove('visible');
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '') return;

        e.preventDefault();
        
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 100;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FLOATING CALL BUTTON ANIMATION
// ============================================
const floatingBtn = document.getElementById('floatingCallBtn');

if (floatingBtn) {
    // Add entrance animation after page load
    setTimeout(() => {
        floatingBtn.style.animation = 'bounceIn 1s ease-out';
    }, 1000);
}

// ============================================
// PAGE TRANSITION EFFECTS
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Fade in page content
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// ============================================
// MOUSE PARALLAX EFFECT (Hero Section)
// ============================================
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (!heroSection || floatingCards.length === 0) return;

    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroSection;
        
        const xPos = (clientX / offsetWidth - 0.5) * 2;
        const yPos = (clientY / offsetHeight - 0.5) * 2;

        floatingCards.forEach((card, index) => {
            const speed = 10 + (index * 5);
            const x = xPos * speed;
            const y = yPos * speed;
            
            gsap.to(card, {
                x: x,
                y: y,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });
}

// Initialize parallax if on appropriate page
if (document.querySelector('.hero-section')) {
    initParallax();
}

// ============================================
// CURSOR GLOW EFFECT (Optional Enhancement)
// ============================================
function initCursorGlow() {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursorGlow.style.left = cursorX + 'px';
        cursorGlow.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();
}

// Enable cursor glow on desktop only
if (window.innerWidth > 1024) {
    initCursorGlow();
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Enhanced keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const popup = document.getElementById('callPopupOverlay');
        const chatbot = document.getElementById('chatbotWindow');
        
        if (popup && popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
        
        if (chatbot && chatbot.classList.contains('active')) {
            chatbot.classList.remove('active');
        }
    }
});

// Focus trap for modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Apply focus trap to popup
const popup = document.querySelector('.call-popup');
if (popup) {
    trapFocus(popup);
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log(
    '%c🚀 Smart Choice Internet Premium Website',
    'font-size: 16px; font-weight: bold; color: #00d4ff;'
);
console.log(
    '%cBuilt with cutting-edge tech: HTML5, CSS3, JavaScript ES6+, GSAP',
    'font-size: 12px; color: #a8a8b3;'
);
console.log(
    '%c⚡ Independent Third-Party Technical Assistance Platform',
    'font-size: 11px; color: #6b6b7a;'
);

// ============================================
// EXPORT FOR MODULE USAGE (if needed)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initScrollAnimations,
        initFAQ,
        initPopups,
        initChatbot,
        initContactForm
    };
}