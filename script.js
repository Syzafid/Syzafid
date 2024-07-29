document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-img-top');

    cards.forEach(card => {
        let timeout;
        card.addEventListener('mousemove', () => {
            card.classList.add('shake');
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                card.classList.remove('shake');
            }, 500);
        });
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar1 = document.querySelector('.navbar:first-of-type');
    const navbar2 = document.querySelector('.fixed-top-2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar2.classList.add('show');
            } else {
                navbar2.classList.remove('show');
            }
        });
    });

    observer.observe(navbar1);
});

document.addEventListener('DOMContentLoaded', function() {
    var skills = document.querySelectorAll('.each-skills .progressBar .percentagem');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAnimation() {
        skills.forEach(function(skill) {
            if (isElementInViewport(skill)) {
                if (!skill.classList.contains('animate')) {
                    skill.classList.add('animate');
                    skill.style.width = skill.getAttribute('data-percentage');
                }
            } else {
                if (skill.classList.contains('animate')) {
                    skill.classList.remove('animate');
                    skill.style.width = '0';
                }
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    window.addEventListener('resize', checkAnimation);

    checkAnimation(); // Initial check on page load
});