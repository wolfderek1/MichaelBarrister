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

// CRAZY COFFEE ANIMATION SYSTEM! ☕🚀
class CoffeeAnimationManager {
    constructor() {
        this.coffeeEmojis = ['☕', '🫖', '🧋', '🥤', '🍵'];
        this.animationTypes = ['coffee-left', 'coffee-right', 'coffee-bounce', 'coffee-spiral', 'coffee-zigzag'];
        this.isActive = true;
        this.maxCoffees = 8;
        this.activeCoffees = 0;
        console.log('☕ Coffee Animation Manager initialized!');
    }

    createCoffeeElement() {
        if (this.activeCoffees >= this.maxCoffees) {
            console.log('☕ Max coffees reached, skipping...');
            return;
        }

        const coffee = document.createElement('div');
        const randomEmoji = this.coffeeEmojis[Math.floor(Math.random() * this.coffeeEmojis.length)];
        const randomAnimation = this.animationTypes[Math.floor(Math.random() * this.animationTypes.length)];
        
        coffee.textContent = randomEmoji;
        coffee.className = `coffee-animation ${randomAnimation}`;
        
        // Random starting position based on animation type
        if (randomAnimation === 'coffee-left') {
            coffee.style.top = Math.random() * 80 + 10 + '%';
        } else if (randomAnimation === 'coffee-right') {
            coffee.style.top = Math.random() * 80 + 10 + '%';
        } else if (randomAnimation === 'coffee-bounce') {
            coffee.style.left = Math.random() * 90 + 5 + '%';
        } else {
            coffee.style.top = Math.random() * 100 + '%';
            coffee.style.left = Math.random() * 100 + '%';
        }
        
        // Random delay and size
        const delay = Math.random() * 2;
        const size = 1.5 + Math.random() * 1.5;
        
        coffee.style.setProperty('--delay', delay + 's');
        coffee.style.fontSize = size + 'rem';
        
        // Add some sparkle effect randomly
        if (Math.random() < 0.3) {
            coffee.style.filter = 'drop-shadow(0 0 10px gold)';
        }
        
        document.body.appendChild(coffee);
        this.activeCoffees++;
        
        console.log(`☕ Created ${randomEmoji} with ${randomAnimation} animation`);
        
        // Remove after animation completes
        const animationDuration = this.getAnimationDuration(randomAnimation) * 1000 + delay * 1000;
        setTimeout(() => {
            if (coffee.parentNode) {
                coffee.remove();
                this.activeCoffees--;
                console.log('☕ Coffee removed, active count:', this.activeCoffees);
            }
        }, animationDuration);
    }
    
    getAnimationDuration(animationType) {
        const durations = {
            'coffee-left': 3,
            'coffee-right': 3.5,
            'coffee-bounce': 4,
            'coffee-spiral': 5,
            'coffee-zigzag': 4.5
        };
        return durations[animationType] || 3;
    }
    
    startCoffeeStorm() {
        if (!this.isActive) return;
        
        console.log('☕ Starting coffee storm!');
        // Create multiple coffees in quick succession
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createCoffeeElement();
            }, i * 200);
        }
    }
    
    startRandomCoffees() {
        console.log('☕ Starting random coffee generation...');
        setInterval(() => {
            if (this.isActive && Math.random() < 0.7) {
                this.createCoffeeElement();
            }
        }, 2000 + Math.random() * 3000);
    }
    
    startCoffeeStorms() {
        console.log('☕ Starting periodic coffee storms...');
        setInterval(() => {
            if (this.isActive && Math.random() < 0.3) {
                this.startCoffeeStorm();
            }
        }, 15000 + Math.random() * 10000);
    }
    
    toggle() {
        this.isActive = !this.isActive;
        console.log('Coffee animations:', this.isActive ? 'ON ☕' : 'OFF');
        return this.isActive;
    }
}

// Initialize Coffee Animation Manager
const coffeeManager = new CoffeeAnimationManager();

// Start the coffee madness!
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        coffeeManager.startRandomCoffees();
        coffeeManager.startCoffeeStorms();
        
        // Special events trigger extra coffee
        document.addEventListener('click', () => {
            if (Math.random() < 0.2) {
                coffeeManager.createCoffeeElement();
            }
        });
        
        // Scroll triggers coffee
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (Math.random() < 0.15) {
                    coffeeManager.createCoffeeElement();
                }
            }, 100);
        });
        
        // Hover over platform items triggers coffee
        const platformItems = document.querySelectorAll('.platform-item, .surprise-card');
        platformItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (Math.random() < 0.4) {
                    coffeeManager.createCoffeeElement();
                }
            });
        });
        
    }, 3000); // Start after 3 seconds
});

// Add keyboard shortcut to toggle coffee (Press 'T' for Tim Hortons!)
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't') {
        coffeeManager.toggle();
        
        // Show status message
        const message = document.createElement('div');
        message.textContent = coffeeManager.isActive ? '☕ COFFEE ACTIVATED! EH!' : '☕ Coffee Paused';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 20px;
            font-weight: bold;
            font-size: 1.2rem;
            z-index: 10001;
            box-shadow: 0 10px 30px rgba(139, 69, 19, 0.5);
            border: 3px solid #FF0000;
        `;
        
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 2000);
    }
});

// Special Canadian Coffee Celebration (Press 'H' for Hockey + Coffee!)
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'h') {
        // MEGA COFFEE STORM!
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                coffeeManager.createCoffeeElement();
            }, i * 100);
        }
        
        // Add celebratory message
        const celebration = document.createElement('div');
        celebration.textContent = '🏒☕ HOCKEY COFFEE STORM! 🇨🇦☕';
        celebration.style.cssText = `
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #FF0000 0%, #FFFFFF 50%, #FF0000 100%);
            color: #333;
            padding: 1.5rem 3rem;
            border-radius: 25px;
            font-weight: bold;
            font-size: 1.5rem;
            z-index: 10002;
            box-shadow: 0 15px 40px rgba(255, 0, 0, 0.6);
            border: 4px solid #8B4513;
            animation: mapleFloat 3s ease-in-out;
        `;
        
        document.body.appendChild(celebration);
        setTimeout(() => celebration.remove(), 3000);
    }
});

// FORCE START COFFEE ANIMATIONS - IMMEDIATE EXECUTION!
console.log('🚀 LOADING COFFEE SYSTEM...');

// Initialize immediately when script loads
if (typeof window !== 'undefined') {
    console.log('☕ Creating coffee manager...');
    window.coffeeManager = new CoffeeAnimationManager();
    
    // Start coffee animations after a short delay
    setTimeout(() => {
        console.log('☕ STARTING COFFEE CHAOS!');
        coffeeManager.createCoffeeElement();
        coffeeManager.createCoffeeElement();
        coffeeManager.createCoffeeElement();
        
        // Start continuous animations
        coffeeManager.startRandomCoffees();
        coffeeManager.startCoffeeStorms();
        
        console.log('☕ Coffee system fully activated! Press T to toggle, H for hockey storm!');
    }, 2000);
}

// Also try when DOM is ready (backup)
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Ready - Coffee backup initialization...');
    if (!window.coffeeManager) {
        window.coffeeManager = new CoffeeAnimationManager();
        setTimeout(() => {
            coffeeManager.createCoffeeElement();
            coffeeManager.startRandomCoffees();
            coffeeManager.startCoffeeStorms();
        }, 1000);
    }
});

// Manual test function for debugging
window.testCoffee = function() {
    console.log('🧪 Manual coffee test!');
    if (window.coffeeManager) {
        window.coffeeManager.createCoffeeElement();
        return 'Coffee created!';
    } else {
        console.error('Coffee manager not found!');
        return 'Error: No coffee manager!';
    }
};