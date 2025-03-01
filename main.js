// const header = document.querySelector('header');

// let scrollTimeout;

// function hideHeader() {
//     header.style.top = '-100%';
// }

// function showHeader() {
//     header.style.top = '0';
// }

// window.addEventListener('scroll', function () {
//     if (window.scrollY > window.innerHeight) {
//         showHeader();
//         clearTimeout(scrollTimeout);
//         scrollTimeout = setTimeout(hideHeader, 1000);
//     } else {
//         showHeader();
//     }
// });

document.addEventListener("wheel", (e) => {
    e.preventDefault();
    const sections = document.querySelectorAll("section");
    const current = Math.round(window.scrollY / window.innerHeight);

    if (e.deltaY > 0 && current < sections.length - 1) {
        window.scrollTo({ top: (current + 1) * window.innerHeight, behavior: "smooth" });
    } else if (e.deltaY < 0 && current > 0) {
        window.scrollTo({ top: (current - 1) * window.innerHeight, behavior: "smooth" });
    }
}, { passive: false });

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', (event) => {
    navMenu.classList.toggle('active');
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});