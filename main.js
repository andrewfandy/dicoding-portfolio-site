// Mendapatkan semua elemen nav-item
let navItems = document.querySelectorAll('.nav-item a');

// Mendapatkan semua section
let sections = document.querySelectorAll('section');

// Fungsi untuk menghapus kelas 'active' dari semua nav-item
function removeActiveClasses() {
    navItems.forEach((navItem) => {
        navItem.parentElement.classList.remove('active');
    });
}

// Fungsi untuk menambahkan kelas 'active' ke nav-item yang sesuai
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
