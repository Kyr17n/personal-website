const spanElement = document.getElementById("typed-text");
const cursorElement = document.getElementById("cursor");
const words = ["Front-End Dev.","UI/UX Designer"]; // Words to be typed
let currentWordIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function typeText() {
  if (isTyping) {
    if (currentCharIndex < words[currentWordIndex].length) {
      spanElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeText, 110); // Delay between each character typing
    } else {
      isTyping = false;
      spanElement.style.borderBottom = "2px solid gray"; // Change line color
      cursorElement.style.opacity = 0; // Show cursor
      setTimeout(typeText, 2100); // Delay before deleting text
    }
  } else {
    if (spanElement.textContent.length > 0) {
      spanElement.textContent = spanElement.textContent.slice(0, -1); // Delete last character
      setTimeout(typeText, 50); // Delay between each character deletion
    } else {
      isTyping = true;
      spanElement.style.borderBottom = "2px solid gray"; // Change line color
      cursorElement.style.display = "inline-block"; // Show cursor
      currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
      currentCharIndex = 0;
      setTimeout(typeText, 1000); // Delay before typing next word
    }
  }
}

typeText();




  // function setBackgroundColor(color) {
  //   const body = document.querySelector('body');
  //   body.classList.remove( 'body-black', 'body-white');
  
  //   if (color === 'black') {
  //     body.classList.add('body-black');
  //   } else if (color === 'white') {
  //     body.classList.add('body-white');
  //   }
  // }
  
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

// // Wait for the page to load
// window.addEventListener('load', function() {
//   // Set a delay of 30 seconds (10000 milliseconds)
//   setTimeout(function() {
//     // Scroll to the element with the ID "home"
//     var element = document.getElementById('about-heading');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, 2000);
// });




// // Show the pop-up message after 15 seconds of page load
// setTimeout(function() {
//   var popup = document.getElementById('popup');
//   popup.style.display = 'block';
// }, 3000);

// // Hide the pop-up message when the user scrolls up
// window.addEventListener('scroll', function() {
//   var popup = document.getElementById('popup');
//   popup.style.display = 'none';
// });



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


// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const menuItems = document.querySelector('.menu-items');

// let menuOpen = false;

// hamburgerMenu.addEventListener('click', function(event) {
//   event.stopPropagation(); // Prevent event bubbling to document
//   toggleMenu();
// });

// document.addEventListener('click', function() {
//   if (menuOpen) {
//     toggleMenu();
//   }
// });

// function toggleMenu() {
//   if (menuOpen) {
//     menuItems.classList.remove('show');
//   } else {
//     menuItems.classList.add('show');
//   }
  
//   menuOpen = !menuOpen;
// }




document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  // Easing function for smooth animation
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
});



// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const menuItems = document.querySelector('.menu-items');
// let menuOpen = false;

// hamburgerMenu.addEventListener('click', function(event) {
//   event.stopPropagation(); // Prevent event bubbling to document
//   toggleMenu();
// });

// document.addEventListener('click', function() {
//   if (menuOpen) {
//     toggleMenu();
//   }
// });

// // Get all the menu items
// const menuItemsList = document.querySelectorAll('.menu-items li a');

// // Add click event listeners to the menu items
// menuItemsList.forEach(item => {
//   item.addEventListener('click', scrollToSection);
// });

// // Function to scroll to the corresponding section
// function scrollToSection(event) {
//   event.preventDefault(); // Prevent default anchor behavior

//   const targetId = this.getAttribute('href'); // Get the target section ID
//   const targetSection = document.querySelector(targetId); // Get the target section element

//   if (targetSection) {
//     targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth animation
//     toggleMenu(); // Close the menu after scrolling to the section
//   }
// }

// function toggleMenu() {
//   if (menuOpen) {
//     menuItems.classList.remove('show');
//   } else {
//     menuItems.classList.add('show');
//   }
  
//   menuOpen = !menuOpen;
// }

// document.documentElement.style.setProperty('--animate-duration', '3s');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Disconnect the observer for the element
    }
  });
}, { threshold: 0.1 }); // Adjust the threshold value as needed

const elements = document.querySelectorAll('.element');
elements.forEach((element) => {
  observer.observe(element);
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');
let menuOpen = false;
let menuTimeout;

hamburgerMenu.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent event bubbling to document
  toggleMenu();
  resetMenuTimeout();
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
  event.preventDefault(); // Prevent default anchor behavior

  const targetId = this.getAttribute('href'); // Get the target section ID
  const targetSection = document.querySelector(targetId); // Get the target section element

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth animation
    toggleMenu(); // Close the menu after scrolling to the section
    resetMenuTimeout();
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

function resetMenuTimeout() {
  clearTimeout(menuTimeout); // Clear the previous timeout, if any
  menuTimeout = setTimeout(() => {
    if (menuOpen) {
      toggleMenu();
    }
  }, 3000); // Set the timeout to 5000 milliseconds (5 seconds)
}
