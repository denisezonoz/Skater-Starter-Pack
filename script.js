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
document.addEventListener('DOMContentLoaded', () => {
    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');
    const submitButton = document.querySelector('.submit-btn');

    const quizQuestions = [
        {
            question: "1. What is your primary goal for skateboarding?",
            answers: {
                q1: [
                    { value: 'shortboard', text: 'To learn tricks like ollies, kickflips, and grinds.' },
                    { value: 'freestyle', text: 'To skate and do stylized flatground tricks.' },
                    { value: 'longboard', text: 'To cruise and cover long distances with stability.' },
                    { value: 'surfskate', text: 'To practice and simulate surfing movements on the street.' },
                    { value: 'minicruiser', text: 'To have a small, portable board for short, casual rides.' }
                ]
            }
        },
        {
            question: "2. How would you describe your ideal skating location?",
            answers: {
                q2: [
                    { value: 'shortboard', text: 'Skateparks with ramps, rails, and stairs, or street spots.' },
                    { value: 'freestyle', text: 'Smooth, flat, and open areas like parking lots or driveways.' },
                    { value: 'longboard', text: 'Long, open roads and bike paths with smooth pavement.' },
                    { value: 'surfskate', text: 'Concrete surfaces where you can pump and carve, like banks or bowls.' },
                    { value: 'minicruiser', text: 'The sidewalk on a short trip to a friend\'s house or a store.' }
                ]
            }
        },
        {
            question: "3. What's most important to you in a skateboard's performance?",
            answers: {
                q3: [
                    { value: 'shortboard', text: 'Responsiveness and maneuverability for sharp turns and tricks.' },
                    { value: 'freestyle', text: 'Perfect balance and stability for intricate, technical footwork.' },
                    { value: 'longboard', text: 'Stability and speed for a smooth, fast ride.' },
                    { value: 'surfskate', text: 'Pumping, carving, and replicating the feel of a wave.' },
                    { value: 'minicruiser', text: 'Portability and convenience for quick transportation.' }
                ]
            }
        },
        {
            question: "4. What's your top priority when choosing a board?",
            answers: {
                q4: [
                    { value: 'shortboard', text: 'Street cred and being able to perform technical feats.' },
                    { value: 'freestyle', text: 'Expressing your creativity and unique style through flatground tricks.' },
                    { value: 'longboard', text: 'Effortless cruising and a relaxed, comfortable ride.' },
                    { value: 'surfskate', text: 'Mastering the feeling of surfing on concrete.' },
                    { value: 'minicruiser', text: 'The ability to carry it anywhere and ride anywhere easily.' }
                ]
            }
        },
        {
            question: "5. How do you feel about traveling long distances on your board?",
            answers: {
                q5: [
                    { value: 'shortboard', text: 'I don\'t mind, but I prefer short trips between trick spots.' },
                    { value: 'freestyle', text: 'It\'s not my main focus; I prefer to stay in one spot.' },
                    { value: 'longboard', text: 'I love it! The longer the ride, the better.' },
                    { value: 'surfskate', text: 'It\'s fun to link turns, but I prefer short, intense carves.' },
                    { value: 'minicruiser', text: 'It\'s great for a few blocks, but I wouldn\'t go far.' }
                ]
            }
        }
    ];

    function renderQuiz() {
        quizQuestions.forEach((q, index) => {
            const questionHtml = `
                <div class="question">
                    <h3>${q.question}</h3>
                    <ul class="options">
                        ${q.answers[`q${index + 1}`].map(answer => `
                            <li>
                                <label>
                                    <input type="radio" name="q${index + 1}" value="${answer.value}">
                                    ${answer.text}
                                </label>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            quizContent.insertAdjacentHTML('beforeend', questionHtml);
        });
    }

    renderQuiz();

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

        quizResults.innerHTML = `
            <h2>Your Best Skateboard Match is:</h2>
            <h3>${resultTitle}</h3>
            <p>${resultParagraph}</p>
            <button class="submit-btn" onclick="location.reload()">Take the quiz again</button>
        `;

        quizContent.classList.add('hidden');
        quizResults.classList.remove('hidden');
    });
});
