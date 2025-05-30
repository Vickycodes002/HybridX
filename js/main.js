document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Typing Animation for Hero Text - Fixed Version
    function initTypingAnimation() {
        const typingText = document.querySelector('.typing-text');
        if (!typingText) return;

        const text = "Decrypting the Future of Finance...";
        let index = 0;
        
        // Clear any existing content and reset cursor
        typingText.textContent = '';
        typingText.style.minHeight = '120px'; // Ensure space is reserved
        
        function type() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            } else {
                // Animation complete - add blinking cursor effect
                typingText.classList.add('typing-complete');
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(type, 500);
    }

    // Hero Section Positioning Fix
    function fixHeroPosition() {
        const hero = document.querySelector('.hero');
        const navbar = document.querySelector('.navbar');
        if (!hero || !navbar) return;

        // Calculate navbar height and set hero padding
        const navbarHeight = navbar.offsetHeight;
        hero.style.paddingTop = `${navbarHeight}px`;
        hero.style.height = `calc(100vh - ${navbarHeight}px)`;
    }

    // Scroll Animation for Sections - Optimized Version
    function initScrollAnimations() {
        const sections = document.querySelectorAll('section');
        const strokeLines = document.querySelectorAll('.stroke-line');
        
        // Intersection Observer for sections
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // How It Works Section - Fixed Step Animation
        const stepsContainer = document.querySelector('.steps-container');
        if (stepsContainer) {
            const steps = document.querySelectorAll('.step');
            
            const stepObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.5,
                root: stepsContainer
            });

            steps.forEach(step => {
                stepObserver.observe(step);
            });
        }

        // Stroke Line Animation - Fixed
        function updateStrokeLine() {
            if (strokeLines.length === 0) return;
            
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = (window.scrollY / (docHeight - winHeight)) * 100;
            
            strokeLines.forEach(line => {
                line.style.height = `${scrollPercent}%`;
            });
        }

        window.addEventListener('scroll', updateStrokeLine);
        window.addEventListener('resize', updateStrokeLine);
        updateStrokeLine(); // Initialize
    }

    // FAQ Accordion - Optimized
    function initFAQAccordion() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        if (faqQuestions.length === 0) return;

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = question.classList.contains('active');
                
                // Close all other FAQs
                faqQuestions.forEach(q => {
                    if (q !== question) {
                        q.classList.remove('active');
                        q.nextElementSibling.style.maxHeight = null;
                        q.querySelector('i').classList.remove('fa-chevron-up');
                        q.querySelector('i').classList.add('fa-chevron-down');
                    }
                });
                
                // Toggle current FAQ
                question.classList.toggle('active');
                const icon = question.querySelector('i');
                
                if (!isOpen) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    answer.style.maxHeight = null;
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // Card flip animation
    function initCardFlip() {
        const cardMockup = document.querySelector('.card-mockup');
        if (!cardMockup) return;

        cardMockup.addEventListener('mouseenter', () => {
            cardMockup.classList.add('flipped');
        });
        
        cardMockup.addEventListener('mouseleave', () => {
            cardMockup.classList.remove('flipped');
        });
    }

     // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#0ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#0ff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Initialize all functions
    function initAll() {
        fixHeroPosition();
        initTypingAnimation();
        initScrollAnimations();
        initFAQAccordion();
        initSmoothScrolling();
        initCardFlip();
    }

    // Run initialization
    initAll();

    // Recalculate on resize
    window.addEventListener('resize', () => {
        fixHeroPosition();
    });
});