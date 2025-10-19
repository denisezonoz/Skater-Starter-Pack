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



document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-quiz');
    const restartButton = document.getElementById('restart-quiz');
    const quizContent = document.getElementById('quiz-content');
    const resultsContainer = document.getElementById('results-container');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');

    const results = {
        shortboard: {
            title: "You should get a Shortboard!",
            description: "A shortboard is the perfect choice for someone who wants to learn technical street tricks like ollies, kickflips, and grinds. Its small size and maneuverability make it ideal for skateparks and street skating."
        },
        freestyle: {
            title: "You should get a Freestyle Skateboard!",
            description: "A freestyle board is built for stylized flatground tricks and intricate footwork. If you prefer smooth, open areas to express your style, a symmetrical freestyle deck will offer the balance you need."
        },
        longboard: {
            title: "You should get a Longboard!",
            description: "For long, comfortable cruises and smooth rides, a longboard is the way to go. Its stability and size are great for beginners and for covering long distances with ease."
        },
        surfskate: {
            title: "You should get a Surfskate!",
            description: "If you want to simulate the feeling of surfing on the street, a surfskate is your board. Its unique trucks allow for deep, pumping carves and turns, making it great for practicing your surf moves on concrete."
        },
        minicruiser: {
            title: "You should get a Mini-Cruiser!",
            description: "A mini-cruiser is the ultimate board for portability and casual rides. It's small, lightweight, and perfect for quick trips to the store or cruising down the sidewalk."
        }
    };

    submitButton.addEventListener('click', () => {
        const answers = {};
        const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

        if (radioButtons.length < 5) {
            alert('Please answer all the questions before submitting.');
            return;
        }

        radioButtons.forEach(radio => {
            const value = radio.value;
            answers[value] = (answers[value] || 0) + 1;
        });

        // Find the result with the highest number of votes
        let finalResult = 'shortboard'; // Default to shortboard if there's a tie
        let highestScore = 0;
        for (const boardType in answers) {
            if (answers[boardType] > highestScore) {
                highestScore = answers[boardType];
                finalResult = boardType;
            }
        }

        // Display the result
        resultTitle.textContent = results[finalResult].title;
        resultDescription.textContent = results[finalResult].description;

        quizContent.classList.add('hidden');
        submitButton.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    });

    restartButton.addEventListener('click', () => {
        // Reset all radio buttons
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });

        // Hide results and show the quiz again
        resultsContainer.classList.add('hidden');
        quizContent.classList.remove('hidden');
        submitButton.classList.remove('hidden');
    });
});
