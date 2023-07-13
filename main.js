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

// Menjalankan fungsi setActiveClass saat window di-scroll
window.addEventListener('scroll', function() {
    setActiveClass();
});


document.querySelector('.hamburger-btn').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar.mobile');
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });
  
