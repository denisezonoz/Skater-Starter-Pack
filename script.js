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




// Fade in and out effects for page transitions
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

// Smooth scrolling for anchor links
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

// Quiz Logic
document.addEventListener('DOMContentLoaded', () => {
    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');

    // Make sure to add an ID like 'submit-btn' to your button in quiz.html
    const submitButton = document.getElementById('submit-btn'); 

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const answers = [
                document.querySelector('input[name="q1"]:checked'),
                document.querySelector('input[name="q2"]:checked'),
                document.querySelector('input[name="q3"]:checked'),
                document.querySelector('input[name="q4"]:checked'),
                document.querySelector('input[name="q5"]:checked')
            ];
    
            if (answers.some(answer => !answer)) {
                alert('Please answer all the questions before submitting.');
                return;
            }
    
            const scores = {
                shortboard: 0,
                freestyle: 0,
                longboard: 0,
                surfskate: 0,
                minicruiser: 0
            };
    
            answers.forEach(answer => {
                scores[answer.value]++;
            });
    
            let highestScore = 0;
            let result = '';
    
            for (const skateboard in scores) {
                if (scores[skateboard] > highestScore) {
                    highestScore = scores[skateboard];
                    result = skateboard;
                }
            }
    
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
                    resultParagraph = 'A surfskate is designed to mimic the feeling of surfing on land. It has a special truck system that allows for very tight, pumpable turns and a fluid, "carving" motion. It\'s an excellent choice if you want to practice surf maneuvers or enjoy a unique, flowing ride on the pavement.';
                    break;
                case 'minicruiser':
                    resultTitle = 'Mini Cruiser';
                    resultParagraph = 'A mini cruiser is your best match. It is designed for maximum portability and convenience, with a compact deck and soft wheels for a smooth ride. It\'s perfect for short trips and casual cruising, offering an easy and fun way to get around.';
                    break;
                default:
                    resultTitle = 'No clear result';
                    resultParagraph = 'It seems your answers were evenly split. Feel free to retake the quiz or research each skateboard type to see which one resonates with you the most!';
                    break;
            }
    
            quizContent.style.display = 'none';
            quizResults.style.display = 'block';
    
            quizResults.innerHTML = `
                <h2>${resultTitle}</h2>
                <p>${resultParagraph}</p>
                <button class="retake-btn">Retake Quiz</button>
            `;
            document.querySelector('.retake-btn').addEventListener('click', () => {
                quizContent.style.display = 'block';
                quizResults.style.display = 'none';
                // Reset the form in the HTML
                const quizForm = quizContent.closest('form');
                if (quizForm) quizForm.reset();
            });
        });
    }
});
