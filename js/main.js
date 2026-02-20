/**
 * Cabalgatas Salento Tour - Interactive Website
 * Galloping Horse Parallax & Premium Animations
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initHorseAnimation();
    initParallax();
    initScrollProgress();
    initGallery();
    initSmoothScroll();
    initWhatsAppFloat();
    initFinalHorse();
    initScrollReveal();
});

/**
 * Navigation - Show/hide on scroll and mobile toggle
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    let lastScroll = 0;

    // Scroll behavior for nav
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // Mobile toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

/**
 * Galloping Horse Animation
 * The horse gallops across the screen as you scroll
 * Speed is synced to scroll velocity
 */
function initHorseAnimation() {
    const horse = document.getElementById('horse');
    const horseContainer = document.getElementById('horseContainer');
    const dustContainer = document.getElementById('dustContainer');
    
    if (!horse || !horseContainer) return;

    let scrollProgress = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let animationSpeed = 0.6; // Base animation duration in seconds
    let isActive = true;
    let rafId = null;

    // Create dust particles
    function createDust() {
        if (!dustContainer || Math.random() > 0.3) return;
        
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        particle.style.left = Math.random() * 50 + 'px';
        particle.style.top = Math.random() * 30 + 'px';
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        particle.style.animationDuration = (0.8 + Math.random() * 0.4) + 's';
        
        dustContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1200);
    }

    // Update horse position based on scroll
    function updateHorsePosition() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        
        // Calculate scroll progress (0 to 1)
        scrollProgress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
        
        // Calculate scroll velocity
        scrollVelocity = Math.abs(currentScroll - lastScrollY);
        lastScrollY = currentScroll;
        
        // Adjust animation speed based on scroll velocity
        // Faster scroll = faster gallop
        const minSpeed = 0.3; // Fastest gallop
        const maxSpeed = 1.2; // Slowest gallop
        const speedFactor = Math.min(scrollVelocity / 50, 1); // Cap at max velocity
        animationSpeed = maxSpeed - (speedFactor * (maxSpeed - minSpeed));
        
        // Update CSS animation duration
        document.querySelectorAll('.horse-leg, .horse-torso, .horse-tail, .horse-mane').forEach(el => {
            el.style.animationDuration = animationSpeed + 's';
        });
        
        // Position horse across screen based on scroll
        // Starts at -200px (off-screen left) and moves to 110vw (off-screen right)
        const startPos = -200;
        const endPos = window.innerWidth + 200;
        const currentPos = startPos + (scrollProgress * (endPos - startPos));
        
        horseContainer.style.transform = `translate(${currentPos}px, -50%)`;
        
        // Add bobbing effect based on scroll
        const bobOffset = Math.sin(currentScroll * 0.05) * 5;
        horse.style.transform = `translateY(${bobOffset}px)`;
        
        // Create dust particles more frequently when moving fast
        if (scrollVelocity > 5) {
            createDust();
        }
    }

    // Animation loop
    function animate() {
        if (isActive) {
            updateHorsePosition();
            rafId = requestAnimationFrame(animate);
        }
    }

    // Start animation
    animate();

    // Pause when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isActive = false;
            if (rafId) cancelAnimationFrame(rafId);
        } else {
            isActive = true;
            animate();
        }
    });

    // Initial position
    updateHorsePosition();
}

/**
 * Parallax Background Effects
 */
function initParallax() {
    const parallaxLayers = document.querySelectorAll('.hero-bg-layer');
    
    if (parallaxLayers.length === 0) return;

    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero')?.offsetHeight || window.innerHeight;
        
        // Only animate if hero is visible
        if (scrollY < heroHeight) {
            parallaxLayers.forEach((layer, index) => {
                const speed = parseFloat(layer.dataset.speed) || 0.5;
                const yPos = scrollY * speed;
                layer.style.transform = `translateY(${yPos}px)`;
            });
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    updateParallax();
}

/**
 * Scroll Progress Bar
 */
function initScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }, { passive: true });
}

/**
 * Gallery Lightbox
 */
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox || !lightboxImg) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption')?.textContent || '';
            
            if (img) {
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300);
    }

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * WhatsApp Float Button - Show after scrolling past hero
 */
function initWhatsAppFloat() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (!whatsappFloat) return;

    const hero = document.querySelector('.hero');
    const heroHeight = hero?.offsetHeight || window.innerHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight * 0.5) {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.visibility = 'visible';
            whatsappFloat.style.transform = 'scale(1)';
        } else {
            whatsappFloat.style.opacity = '0';
            whatsappFloat.style.visibility = 'hidden';
            whatsappFloat.style.transform = 'scale(0.8)';
        }
    }, { passive: true });

    // Initial state
    whatsappFloat.style.opacity = '0';
    whatsappFloat.style.visibility = 'hidden';
    whatsappFloat.style.transform = 'scale(0.8)';
    whatsappFloat.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
}

/**
 * Final Horse Animation in Footer
 * Horse gallops off screen when reaching footer
 */
function initFinalHorse() {
    const finalHorse = document.getElementById('finalHorse');
    if (!finalHorse) return;

    const footer = document.querySelector('.footer');
    if (!footer) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                
                // Animate horse galloping across footer
                gsap?.to(finalHorse, {
                    left: '110%',
                    duration: 4,
                    ease: 'power1.inOut'
                });

                // Animate horse legs
                const legs = finalHorse.querySelectorAll('.horse-leg');
                legs.forEach((leg, i) => {
                    gsap?.to(leg, {
                        rotation: 'random(-20, 30)',
                        duration: 0.3,
                        repeat: 13,
                        yoyo: true,
                        delay: i * 0.1
                    });
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(footer);
}

/**
 * Scroll Reveal Animations using Intersection Observer
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-aos]');
    
    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        observer.observe(el);
    });
}

/**
 * GSAP Animations (if GSAP is loaded)
 */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for about images
    gsap.utils.toArray('.about-image').forEach((img, i) => {
        gsap.to(img, {
            y: 100,
            rotation: i % 2 === 0 ? 5 : -5,
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // Pricing cards stagger animation
    gsap.from('.pricing-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Gallery items animation
    gsap.from('.gallery-item', {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Hero title animation on load
    gsap.from('.title-line', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
    });
}

/**
 * Performance: Pause animations when not visible
 */
const performanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('paused');
        } else {
            entry.target.classList.add('paused');
        }
    });
}, { threshold: 0 });

// Observe animated elements
document.querySelectorAll('.horse-container, .dust-container').forEach(el => {
    performanceObserver.observe(el);
});

// Add CSS for paused state
const style = document.createElement('style');
style.textContent = `
    .paused .horse-leg,
    .paused .horse-torso,
    .paused .horse-tail,
    .paused .horse-mane,
    .paused .dust-particle {
        animation-play-state: paused !important;
    }
`;
document.head.appendChild(style);

/**
 * Handle reduced motion preference
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable complex animations
    document.querySelectorAll('.horse-leg, .horse-torso, .horse-tail, .horse-mane').forEach(el => {
        el.style.animation = 'none';
    });
    
    // Simple fade-in for scroll reveals
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}