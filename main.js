// AUTOMATE HIGHLIGHT NAVIGATION PER SECTION
let navItems = document.querySelectorAll('.nav-item a');
let sections = document.querySelectorAll('section');

function removeActiveClasses() {
    navItems.forEach((navItem) => {
        navItem.parentElement.classList.remove('active');
    });
}

function setActiveClass() {
    let index = sections.length;

    while(--index && window.scrollY + 200 < sections[index].offsetTop) {}

    navItems.forEach((navItem) => navItem.parentElement.classList.remove('active'));
    navItems[index].parentElement.classList.add('active');
}

window.addEventListener('scroll', function() {
    setActiveClass();
});


document.querySelector('.bi').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar.mobile');
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
});

// MOBILE NAVIGATION
let hamburgerBtn = document.querySelector('#hamburger-btn');
let crossBtn = document.querySelector('#cross-btn');
let navbar = document.querySelector('.navbar.mobile');

hamburgerBtn.addEventListener('click', function() {
    navbar.style.display = 'block';
    hamburgerBtn.style.display = 'none';
    crossBtn.style.display = 'block';
});

crossBtn.addEventListener('click', function() {
    navbar.style.display = 'none';
    crossBtn.style.display = 'none';
    hamburgerBtn.style.display = 'block';
});

// NAVBAR AUTOMATE CLOSE WHEN USER CLICK(MOBILE) NAVIGATION LINK
navItems.forEach((navItem) => {
    navItem.addEventListener('click', function() {
        if (navbar.style.display === "block"){
            navbar.style.display = 'none';
            crossBtn.style.display = 'none';
            hamburgerBtn.style.display = 'block';
        }
    });
});

// ASIDE CONTACT BUTTON
let box = document.querySelector('.box');
let navbarContact = document.querySelector('.navbar.contact');

box.addEventListener('click', function() {
    if (navbarContact.style.display === 'none' || navbarContact.style.display === '' ) {
        navbarContact.style.display = 'block';
        box.innerHTML = '<i class="bi bi-x-lg"></i>';
    } else {
        navbarContact.style.display = 'none';
        box.innerHTML = '<i class="bi bi-telephone"></i>';
    }
});


// PROJECTS ANIMATION
let projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((projectItem) => {
    projectItem.addEventListener('click', function() {
        let projectPreview = document.querySelector('.project-preview h3');
        projectPreview.style.animation = 'shake 0.5s';
        projectPreview.style.animationIterationCount = '1';

        projectPreview.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});


// PREVIEW POP-UP
let projectPreview = document.querySelector(".project-preview");


// JavaScript
projectItems.forEach((projectItem) => {
    projectItem.addEventListener('click', function() {
        projectPreview.classList.add('show');
        setTimeout(function() {
            projectPreview.classList.remove('show');
        }, 1750); //
    });
});




