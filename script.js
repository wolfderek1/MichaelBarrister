// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    const nav = document.querySelector('.navigation');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.style.background = 'rgba(44, 62, 80, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.transition = 'all 0.3s ease';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add animation to platform items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe platform items
    const platformItems = document.querySelectorAll('.platform-item');
    platformItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Add hover effect to campaign flyer
    const campaignFlyer = document.querySelector('.campaign-flyer');
    if (campaignFlyer) {
        campaignFlyer.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.02)';
        });
        
        campaignFlyer.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(-1deg) scale(1)';
        });
    }
    
    // Add click handlers for social buttons (placeholder)
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Social media links would be configured here!');
        });
    });
    
    // Add typewriter effect to the tagline
    const tagline = document.querySelector('.campaign-tagline h2');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typewriter effect after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Mobile menu toggle (for future enhancement)
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Contact form submission (if added later)
function handleContactSubmission(event) {
    event.preventDefault();
    alert('Thank you for your message! Michael will get back to you soon.');
}

// Vote reminder function
function setVoteReminder() {
    const voteDate = new Date('2025-11-04'); // Update with actual election date
    const now = new Date();
    const daysUntilVote = Math.ceil((voteDate - now) / (1000 * 60 * 60 * 24));
    
    if (daysUntilVote > 0) {
        const voteDateElement = document.querySelector('.vote-date');
        if (voteDateElement) {
            voteDateElement.textContent = `Election in ${daysUntilVote} days!`;
        }
    }
}

// Initialize vote reminder
document.addEventListener('DOMContentLoaded', setVoteReminder);

// Canadian Snow Effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Create snowflakes every 500ms
setInterval(createSnowflake, 500);

// Canadian Greeting Function
function canadianGreeting() {
    const greetings = [
        "Welcome, eh! 🇨🇦",
        "How's it going, buddy? 🍁", 
        "Good day, eh! 🏒",
        "Greetings from the Great White North! ⛄",
        "Hey there, hoser! 🦫"
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Show greeting after page loads
    setTimeout(() => {
        const greeting = document.createElement('div');
        greeting.textContent = randomGreeting;
        greeting.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #FF0000 0%, #FFFFFF 50%, #FF0000 100%);
            color: #333;
            padding: 1rem;
            border-radius: 10px;
            border: 2px solid #FF0000;
            z-index: 10000;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
        `;
        
        document.body.appendChild(greeting);
        
        setTimeout(() => {
            greeting.remove();
        }, 3000);
    }, 2000);
}

// Canadian Easter Eggs
document.addEventListener('keydown', function(e) {
    // Press 'C' for Canada
    if (e.key.toLowerCase() === 'c') {
        document.body.style.filter = 'hue-rotate(0deg) saturate(150%)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 1000);
    }
    
    // Press 'M' for Maple
    if (e.key.toLowerCase() === 'm') {
        const maples = ['🍁', '🍂', '🌿'];
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const maple = document.createElement('div');
                maple.textContent = maples[Math.floor(Math.random() * maples.length)];
                maple.style.cssText = `
                    position: fixed;
                    top: ${Math.random() * 100}vh;
                    left: ${Math.random() * 100}vw;
                    font-size: 2rem;
                    pointer-events: none;
                    z-index: 9999;
                    animation: mapleFloat 2s ease-out forwards;
                `;
                document.body.appendChild(maple);
                
                setTimeout(() => {
                    maple.remove();
                }, 2000);
            }, i * 100);
        }
    }
});

// Initialize Canadian features
document.addEventListener('DOMContentLoaded', canadianGreeting);