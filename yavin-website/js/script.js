// Navbar

// Check position of element

const counterId = document.querySelector('#counterId');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show');
    } else {
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show');
    }
  });

  window.addEventListener('scroll', () => {
    if (isInViewport(counterId)) {
      incrementStats();
    }
  });
  toTopBtn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Increment Stats

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerText = 0;
});

function incrementStats() {
  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const increment = target / 600;

      // counter.innerText = 0;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        // counter.innerText = c + 1;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    setTimeout(updateCounter, 1000);
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
// document.addEventListener('DOMContentLoaded', incrementStats);

//////////////////////////////////////////////////////////////
