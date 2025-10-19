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








//quiz stoof
function calculateResult() {
    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');
    
    // Check if all questions are answered
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');

    if (!q1Answer || !q2Answer || !q3Answer) {
        alert('Please answer all the questions before submitting.');
        return;
    }

    // Initialize scores for each skateboard type
    const scores = {
        shortboard: 0,
        freestyle: 0,
        longboard: 0,
        surfskate: 0,
        minicruiser: 0
    };

    // Tally the score based on the selected radio button values
    scores[q1Answer.value]++;
    scores[q2Answer.value]++;
    scores[q3Answer.value]++;

    // Determine the highest score
    let highestScore = 0;
    let result = '';
    
    for (const skateboard in scores) {
        if (scores[skateboard] > highestScore) {
            highestScore = scores[skateboard];
            result = skateboard;
        }
    }
    
    // Define the results content based on the highest score
    let resultTitle = '';
    let resultParagraph = '';

    switch (result) {
        case 'shortboard':
            resultTitle = 'Shortboard';
            resultParagraph = 'A shortboard is the best fit for you. Its smaller size and concave shape are designed for performing tricks like ollies, kickflips, and grinds at a skatepark or on the street. It offers maximum maneuverability and a responsive feel for technical skating.';
            break;
        case 'freestyle':
            resultTitle = 'Freestyle/Old School';
            resultParagraph = 'A freestyle or old-school board is the perfect choice. This style is built for flat ground tricks, balancing, and advanced footwork. Its unique shape and specialized construction provide the stability and control needed for intricate maneuvers without relying on ramps or rails.';
            break;
        case 'longboard':
            resultTitle = 'Longboard';
            resultParagraph = 'A longboard is ideal for your needs. Its long deck and large, soft wheels provide a smooth, stable ride, making it perfect for cruising, commuting, and downhill riding. You will experience a comfortable and fast journey over long distances.';
            break;
        case 'surfskate':
            resultTitle = 'Surf Skate';
            resultParagraph = 'A surf skate is your match. Equipped with a specialized front truck, it allows for a fluid, pumping motion that mimics the feeling of riding a surfboard on a wave. It is perfect for carving on flat ground, in bowls, and practicing your surf technique on land.';
            break;
        case 'minicruiser':
            resultTitle = 'Mini Cruiser';
            resultParagraph = 'A mini cruiser is the best option for you. This small and lightweight board is highly portable, making it easy to carry around. With its soft wheels, it provides a smooth ride over pavement cracks, making it great for casual, short-distance rides around town.';
            break;
        default:
            resultTitle = 'No Clear Match';
            resultParagraph = 'It seems your preferences are varied! Any of the skateboards could be a fun option depending on what you want to try first.';
            break;
    }
    
    // Display the results
    quizResults.innerHTML = `
        <h2>Your Best Skateboard Match is:</h2>
        <h3>${resultTitle}</h3>
        <p>${resultParagraph}</p>
    `;

    // Hide the quiz content and show the results
    quizContent.classList.add('hidden');
    quizResults.classList.remove('hidden');
}



