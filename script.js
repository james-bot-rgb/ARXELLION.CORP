// CTA Button
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    alert('Welcome to Arxellion Corp! Explore our services.');
});

// Tabs Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tab).classList.add('active');
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Thank you.');
    contactForm.reset();
});

// Hero Particle Background
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ['#ffd700', '#ffa500'];

class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if(this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for(let i=0; i<100; i++){
        const size = Math.random()*3+1;
        const x = Math.random()*canvas.width;
        const y = Math.random()*canvas.height;
        const color = colors[Math.floor(Math.random()*colors.length)];
        const speedX = (Math.random()-0.5)*1;
        const speedY = (Math.random()-0.5)*1;
        particlesArray.push(new Particle(x,y,size,color,speedX,speedY));
    }
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p => {p.update(); p.draw();});
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animate();
// Scroll animations
const animateElements = document.querySelectorAll('.animate');

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animateElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
// Contact tabs functionality
const contactTabButtons = document.querySelectorAll('.contact-tabs .tab-btn');
const contactTabContents = document.querySelectorAll('.contact-tabs .tab-content');

contactTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        contactTabButtons.forEach(b => b.classList.remove('active'));
        contactTabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});
