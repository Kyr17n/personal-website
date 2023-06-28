 // JavaScript code for hamburger menu toggle and scrolling animation
 const hamburgerMenu = document.querySelector('.hamburger-menu');
 const menuItems = document.querySelector('.menu-items');
 let menuOpen = false;

 hamburgerMenu.addEventListener('click', function(event) {
   event.stopPropagation(); // Prevent event bubbling to document
   toggleMenu();
 });

 document.addEventListener('click', function() {
   if (menuOpen) {
     toggleMenu();
   }
 });

 // Get all the menu items
 const menuItemsList = document.querySelectorAll('.menu-items li a');

 // Add click event listeners to the menu items
 menuItemsList.forEach(item => {
   item.addEventListener('click', scrollToSection);
 });

// Function to scroll to the corresponding section
function scrollToSection(event) {
const targetId = this.getAttribute('href'); // Get the target section ID
const targetSection = document.querySelector(targetId); // Get the target section element

if (targetSection) {
if (menuOpen) {
event.preventDefault(); // Prevent default anchor behavior only if the menu is open
targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth animation
toggleMenu(); // Close the menu after scrolling to the section
} else {
// Allow default anchor behavior if the menu is closed
// This will allow the links to redirect to their respective sections
}
}
}

 function toggleMenu() {
   if (menuOpen) {
     menuItems.classList.remove('show');
   } else {
     menuItems.classList.add('show');
   }

   menuOpen = !menuOpen;
 }


 window.onscroll = function() { scrollFunction() };

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 document.getElementById("backToTopBtn").classList.add("show");
} else {
 document.getElementById("backToTopBtn").classList.remove("show");
}
}

function scrollToTop() {
document.body.scrollTop = 0; // Scroll to the top of the body
document.documentElement.scrollTop = 0; // Scroll to the top of the document
}


function setBackgroundColor(color) {
    const body = document.querySelector('body');
    body.classList.remove('body-black', );
  
    if (color === 'black') {
      body.classList.add('body-black');
    } else if (color === 'white') {
      body.classList.add('body-white');
    }
  }
  
  // Set the initial background color to white
  setBackgroundColor('white');
  

// Get all the navigation items
const navigationItems = document.querySelectorAll('.navigation-list__item');

// Loop through each navigation item
navigationItems.forEach(item => {
  // Add a click event listener to each item
  item.addEventListener('click', () => {
    // Remove the 'active' class from all navigation items
    navigationItems.forEach(item => {
      item.classList.remove('navigation-list__item--active');
    });

    // Add the 'active' class to the clicked navigation item
    item.classList.add('navigation-list__item--active');
  });
});

// Filter project items
function filterProjects(category) {
  const projectItems = document.querySelectorAll('.item');

  projectItems.forEach((item) => {
    const itemCategory = item.dataset.category;

    if (category === 'all' || category === itemCategory) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Get filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

// Add click event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    filterProjects(category);
  });
});
