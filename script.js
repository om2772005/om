// JavaScript for Sticky Navbar with Scroll Animation

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("nav ul li a");

    // Add sticky class to navbar when you reach its scroll position
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    // Loop through sections to check which section is in the viewport
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight; // Adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove("active");
        // Add active class to the current link
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedItems = document.querySelectorAll(".animate-on-scroll");

    function animateOnScroll() {
        animatedItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100 && itemPosition > 0) {
                item.classList.add("in-view");
            } else {
                item.classList.remove("in-view");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();  // Trigger animation on page load
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedItems = document.querySelectorAll(".animate-on-scroll");
    const homeSection = document.getElementById("home");

    function animateOnScroll() {
        animatedItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100 && itemPosition > 0) {
                item.classList.add("in-view");
            } else {
                item.classList.remove("in-view");
            }
        });

        // Check if we're back at the home section
        const homePosition = homeSection.getBoundingClientRect().top;
        if (homePosition >= 0 && homePosition < windowHeight) {
            homeSection.classList.add("home-in-view");
        } else {
            homeSection.classList.remove("home-in-view");
        }
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();  // Trigger animation on page load
});


