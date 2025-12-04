
document.addEventListener("DOMContentLoaded", (event) => {
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) createParticle(particlesContainer);
    
    document.getElementById('openLink').addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        const link = e.target.closest('a');
        if (!link) return;
        window.electronAPI.openExternal(link.href);
    });
})

function createParticle(particlesContainer) {
    console.log(particlesContainer);
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    resetParticle(particle);
    particlesContainer.appendChild(particle);
    animateParticle(particle);
}


function resetParticle(particle) {
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = '0';
}

function animateParticle(particle) {
    resetParticle(particle);
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 70}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);

    }, delay * 1000);
}