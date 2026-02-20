/**
 * Cabalgatas Salento Tour - Opening Sequence & Parallax Experience
 * Large galloping horse intro + right-to-left scroll animation
 */

document.addEventListener('DOMContentLoaded', () => {
    initOpeningSequence();
    initNavigation();
    initHorseAnimation();
    initScrollProgress();
    initGallery();
    initSmoothScroll();
    initWhatsAppFloat();
    initFinalHorse();
    initScrollReveal();
});

/**
 * OPENING SEQUENCE
 * Elegant horse gallops from right to left, reveals branding
 */
function initOpeningSequence() {
    const opening = document.getElementById('opening');
    const openingHorse = document.getElementById('openingHorse');
    const mainContent = document.getElementById('mainContent');
    const nav = document.getElementById('nav');
    
    if (!opening || !openingHorse) return;

    let hasRevealed = false;
    let horsePosition = 0; // Start position
    const targetPosition = window.innerWidth + 600; // End off-screen left
    
    // Initial animation - horse enters and gallops
    function animateOpeningHorse() {
        // Move horse from right to left
        horsePosition += 6; // Elegant gallop speed
        
        if (horsePosition < targetPosition) {
            openingHorse.style.transform = `translateY(-50%) translateX(-${horsePosition}px)`;
            requestAnimationFrame(animateOpeningHorse);
        }
    }
    
    // Start opening animation
    setTimeout(() => {
        opening.classList.add('revealed');
        animateOpeningHorse();
    }, 300);

    // Scroll handler - reveals main content
    function handleScroll() {
        if (hasRevealed) return;
        
        const scrollY = window.scrollY;
        const threshold = window.innerHeight * 0.3;
        
        if (scrollY > threshold) {
            hasRevealed = true;
            
            // Fade out opening sequence
            opening.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            opening.style.opacity = '0';
            opening.style.transform = 'translateY(-50px)';
            opening.style.pointerEvents = 'none';
            
            // Show navigation
            setTimeout(() => {
                nav.classList.add('visible');
            }, 400);
            
            // Remove opening from DOM after animation
            setTimeout(() => {
                opening.style.display = 'none';
            }, 1000);
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Navigation
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

/**
 * HORSE ANIMATION - RIGHT to LEFT across website
 */
function initHorseAnimation() {
    const horse = document.getElementById('horse');
    const horseContainer = document.getElementById('horseContainer');
    const dustContainer = document.getElementById('dustContainer');
    
    if (!horse || !horseContainer) return;

    let lastScrollY = window.scrollY;
    let isActive = true;

    // Create dust particles
    function createDust() {
        if (!dustContainer || Math.random() > 0.3) return;
        
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        particle.style.right = Math.random() * 50 + 'px';
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

    // Update horse position based on scroll - RIGHT to LEFT
    function updateHorsePosition() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
        
        // Calculate scroll velocity
        const scrollVelocity = Math.abs(currentScroll - lastScrollY);
        lastScrollY = currentScroll;
        
        // Adjust animation speed based on scroll velocity
        const minSpeed = 0.3;
        const maxSpeed = 1.2;
        const speedFactor = Math.min(scrollVelocity / 50, 1);
        const animationSpeed = maxSpeed - (speedFactor * (maxSpeed - minSpeed));
        
        document.querySelectorAll('.horse-leg, .horse-torso, .horse-tail, .horse-mane').forEach(el => {
            el.style.animationDuration = animationSpeed + 's';
        });
        
        // Position horse: starts at right (off-screen), moves to left (off-screen)
        // RIGHT to LEFT movement
        const startPos = window.innerWidth + 250; // Start off-screen right
        const endPos = -450; // End off-screen left
        const currentPos = startPos - (scrollProgress * (startPos - endPos));
        
        horseContainer.style.transform = `translateY(-50%) translateX(${currentPos}px)`;
        
        // Add bobbing effect
        const bobOffset = Math.sin(currentScroll * 0.05) * 5;
        horse.style.transform = `translateY(${bobOffset}px)`;
        
        // Create dust when moving
        if (scrollVelocity > 5) {
            createDust();
        }
    }

    // Animation loop
    function animate() {
        if (isActive) {
            updateHorsePosition();
            requestAnimationFrame(animate);
        }
    }

    animate();

    // Pause when tab hidden
    document.addEventListener('visibilitychange', () => {
        isActive = !document.hidden;
        if (isActive) animate();
    });
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/**
 * Smooth Scroll
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
 * WhatsApp Float Button
 */
function initWhatsAppFloat() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (!whatsappFloat) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            whatsappFloat.classList.add('visible');
        } else {
            whatsappFloat.classList.remove('visible');
        }
    }, { passive: true });
}

/**
 * Final Horse in Footer
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
                
                // Animate horse galloping across footer - RIGHT to LEFT
                if (typeof gsap !== 'undefined') {
                    gsap.to(finalHorse, {
                        right: '110%',
                        duration: 4,
                        ease: 'power1.inOut'
                    });
                } else {
                    finalHorse.style.transition = 'right 4s ease-in-out';
                    finalHorse.style.right = '110%';
                }
            }
        });
    }, { threshold: 0.3 });

    observer.observe(footer);
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-aos]');
    
    if (revealElements.length === 0) return;

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
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
}

/**
 * GSAP Animations
 */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Pricing cards animation
    gsap.from('.pricing-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 85%',
        }
    });

    // Gallery items animation
    gsap.from('.gallery-item', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.5)',
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 85%',
        }
    });

    // Experience cards
    gsap.from('.experience-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.experience-grid',
            start: 'top 85%',
        }
    });
}

/**
 * Reduced Motion Support
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.horse-leg, .horse-torso, .horse-tail, .horse-mane, .o-horse-leg, .o-horse-torso, .o-horse-tail, .o-horse-mane').forEach(el => {
        el.style.animation = 'none';
    });
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}