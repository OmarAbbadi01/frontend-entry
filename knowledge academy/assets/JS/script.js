// let after = document.querySelector(".after");
// let before = document.querySelector(".before");
// let header = document.querySelector(".coursesHeader");
// let div = document.querySelector(".coursesHeaderDiv");

// let width = div.offsetWidth - (div.offsetWidth * 0.65 + header.offsetWidth + div.offsetWidth * 0.75);
// after.style.width = width + 'px';

let navBar = document.querySelector(".navBar");

window.onscroll = () => {    
    if (window.scrollY > 1) {
        navBar.classList.add("active");
    }
    else {
        navBar.classList.remove('active');
    }
};

