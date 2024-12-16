// Navigation burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Typing effect
// const text = document.querySelector('.typing-text');
// const phrases = ['Teknisi Jaringan', 'Network Administrator', 'IT Support'];
// let phraseIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function type() {
//     const currentPhrase = phrases[phraseIndex];
    
//     if (isDeleting) {
//         text.textContent = currentPhrase.substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(type, 50);
//     } else {
//         text.textContent = currentPhrase.substring(0, charIndex + 1);
//         charIndex++;
//         setTimeout(type, 150);
//     }

//     if (!isDeleting && charIndex === currentPhrase.length) {
//         isDeleting = true;
//         setTimeout(type, 2000);
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         phraseIndex = (phraseIndex + 1) % phrases.length;
//         setTimeout(type, 500);
//     }
// }

// Start typing effect
// type();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Pesan telah terkirim!');
    form.reset();
});

// Animasi untuk project cards saat di-scroll
const projectCards = document.querySelectorAll('.project-card');
const projectImages = document.querySelectorAll('.project-image');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    observer.observe(card);
});

// Hover effect untuk project images
projectImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.querySelector('.overlay').style.opacity = '1';
    });
    
    image.addEventListener('mouseleave', function() {
        this.querySelector('.overlay').style.opacity = '0';
    });
});

// Animasi khusus untuk card desain grafis
const designCard = document.querySelector('.project-card:last-child');
const designIcons = document.querySelectorAll('.design-icons i');

designCard.addEventListener('mouseenter', () => {
    designIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
});

designCard.addEventListener('mouseleave', () => {
    designIcons.forEach(icon => {
        icon.style.animation = '';
    });
});

// Tambahkan animasi fade-in untuk teks
document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4');
    
    textElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300);
    });
});

// Animasi scroll untuk nav links
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect untuk hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroAnimation = document.querySelector('.hero-animation');
    heroAnimation.style.transform = `translateY(${scrolled * 0.4}px)`;
});

// Smooth reveal animation untuk sections
const revealElements = document.querySelectorAll('.hero-content, .about-content, .projects-grid, #contact-form');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});

// Animasi untuk server card
const serverCard = document.querySelector('.project-card:nth-child(2)');
const serverIcons = serverCard.querySelectorAll('.server-icons i');

serverCard.addEventListener('mouseenter', () => {
    serverIcons.forEach((icon, index) => {
        icon.style.animation = `serverIconSpin 1s ease ${index * 0.2}s infinite`;
    });
});

serverCard.addEventListener('mouseleave', () => {
    serverIcons.forEach(icon => {
        icon.style.animation = '';
    });
});

// Simulasi status server
function updateServerStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.server-status span');
    
    setInterval(() => {
        const isOnline = Math.random() > 0.1; // 90% chance server online
        
        if (isOnline) {
            statusDot.style.background = '#2ecc71';
            statusText.textContent = 'Server Online';
        } else {
            statusDot.style.background = '#e74c3c';
            statusText.textContent = 'Checking Server...';
            
            setTimeout(() => {
                statusDot.style.background = '#2ecc71';
                statusText.textContent = 'Server Online';
            }, 2000);
        }
    }, 5000);
}

// Start server status simulation
updateServerStatus();

// Animasi untuk social cards
const socialCards = document.querySelectorAll('.social-card');

const socialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

socialCards.forEach(card => {
    socialObserver.observe(card);
});

// Hover effect untuk Instagram gallery
const instaImages = document.querySelectorAll('.insta-img');

instaImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        instaImages.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.style.opacity = '0.5';
            }
        });
    });

    img.addEventListener('mouseleave', () => {
        instaImages.forEach(otherImg => {
            otherImg.style.opacity = '1';
        });
    });
});