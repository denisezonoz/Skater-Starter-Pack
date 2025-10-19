document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

window.addEventListener('beforeunload', () => {
  document.body.classList.add('fade-out');
});


function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Highlight nav links while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.site-nav a');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (window.scrollY >= top) current = sec.id;
  });

  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});














//quiz



document.getElementById('skateboard-quiz').addEventListener('submit', function(event) {
    event.preventDefault();

    const results = {
        Shortboard: 0,
        Freestyle: 0,
        Longboard: 0,
        Surfskate: 0,
        Minicruiser: 0
    };

    const form = event.target;
    const questions = form.querySelectorAll('.question');
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            results[selectedOption.value]++;
        }
    });

    let bestMatch = 'Shortboard';
    let maxScore = 0;
    for (const board in results) {
        if (results[board] > maxScore) {
            maxScore = results[board];
            bestMatch = board;
        }
    }

    displayResult(bestMatch);
});

function displayResult(board) {
    const boardTypes = {
        Shortboard: {
            name: 'Shortboard',
            description: 'You are best suited for a **Shortboard**. This is the most common skateboard shape, ideal for tricks like ollies, kickflips, and grinds at skateparks and on the street. It features a symmetrical deck with a kicktail and kick nose for maximum pop and maneuverability.',
        },
        Freestyle: {
            name: 'Freestyle / Old School',
            description: 'You are best suited for a **Freestyle / Old School** board. This style is perfect for those interested in creative, technical flatland tricks and footwork. These decks often have a kicktail, are lighter, and may be directional for specific types of spins and movements.',
        },
        Longboard: {
            name: 'Longboard',
            description: 'You are best suited for a **Longboard**. Longboards are designed for a smooth, stable, and comfortable ride, making them great for cruising, commuting, and downhill speed. They are significantly longer than other boards and offer a more cushioned ride on various surfaces.',
        },
        Surfskate: {
            name: 'Surfskate',
            description: 'You are best suited for a **Surfskate**. This board is designed to mimic the feeling of surfing on land. It features a special front truck that allows for tight, fluid turns and lets you "pump" for speed without pushing, making it great for practicing surf maneuvers.',
        },
        Minicruiser: {
            name: 'Minicruiser',
            description: 'You are best suited for a **Minicruiser**. Small and highly portable, this board is ideal for short-distance commuting, cruising campus, or casual rides around town. Its compact size makes it easy to carry in a backpack or locker.',
        }
    };

    const resultEl = document.getElementById('result');
    const boardTypeEl = document.getElementById('board-type');
    const boardDescEl = document.getElementById('board-description');

    const resultData = boardTypes[board];
    boardTypeEl.textContent = resultData.name;
    boardDescEl.innerHTML = resultData.description;
    resultEl.style.display = 'block';
}

    });
});
