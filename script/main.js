// 🎈 Floating particles
function createParticles() {
    const emojis = ['❤️','💞','🌟','💝','🌠'];
    function spawn() {
        const p = document.createElement('div');
        p.className = 'love-particle';
        p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        p.style.left = Math.random()*100 + '%';
        document.body.appendChild(p);
        setTimeout(()=>p.remove(),6000);
        setTimeout(spawn,500);
    }
    spawn();
}

// 💬 Message animation
const messages = document.querySelectorAll('.message');
const messageContainer = document.querySelector('.message-container');
const fullPoem = document.getElementById('fullPoem');
const music = document.getElementById('bg-music');
let index = 0;

function showNext() {
    if (index > 0) messages[index-1].classList.add('exit');
    if (index < messages.length) {
        messages[index].classList.add('active');
        index++;
        setTimeout(showNext, 3000);
    } else {
        messageContainer.style.display = 'none';
        fullPoem.style.display = 'block';
        music.volume = 0.6;
        music.play().catch(()=>{});
    }
}

// 💖 Buttons
document.addEventListener('click', () => {
    music.play().catch(()=>{});
}, { once:true });

document.querySelector('.yes-btn').addEventListener('click', () => {
    document.querySelector('.final-question').innerHTML =
        "<h2>🎉 I know you're my KUTCHUBUCHU 💝</h2><div style='font-size:3rem'>💞🌟</div>";
});

document.querySelector('.no-btn').addEventListener('mouseover', function () {
    this.style.transform =
        `translate(${Math.random()*200-100}px,${Math.random()*200-100}px) rotate(${Math.random()*360}deg)`;
});

// Init
createParticles();
setTimeout(showNext, 1000);
