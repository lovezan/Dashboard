let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.data-progress');

progress.forEach((pro) => {
  let percentage = pro.getAttribute('data-value');
  let color = pro.getAttribute('data-stroke');
  let animateTime = pro.getAttribute('data-time');
  let radius = pro.r.baseVal.value;
  let circumference = radius * 2 * Math.PI;
  let stroke = circumference - (circumference * percentage) / 100;
  pro.style.setProperty('--stroke-dashoffset', stroke);
  pro.style.setProperty('--stroke-dasharray', circumference);
  pro.style.setProperty('--stroke', color);
  pro.style.setProperty('--animation-time', `${animateTime * 80}ms`);
})

progress_text.forEach((text) => {
  let data = text.getAttribute('data-value');
  let progress_value = 0;
  let progress_bar = setInterval(() => {
    progress_value++;
    text.innerText = `${progress_value}%`;
    if (progress_value == data) {
      clearInterval(progress_bar);
    }
  }, 100);
})



document.addEventListener("DOMContentLoaded", function () {
  let providers = document.querySelectorAll('.provider');

  providers.forEach(provider => {
      let percentage = provider.getAttribute('data-value');
      let color = provider.getAttribute('data-stroke');
      let animateTime = provider.getAttribute('data-time');

      provider.style.height = `${percentage}%`;
      provider.style.background = color;

      setTimeout(() => {
          provider.style.transition = 'height 1s ease, background-color 1s ease';
      }, animateTime * 1000);
  });
});



   // Get all circles with the class 'progress'
const circles = document.querySelectorAll('.progress');

// Function to update circle radius
function updateRadius() {
  // Check the screen width
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  // Set the new radius based on the screen width
  const newRadius = screenWidth <= 480 ? 35 : 40;

  // Update the radius for each circle
  circles.forEach(circle => {
    circle.setAttribute('r', newRadius);
  });
}

// Initial call to set the initial radius
updateRadius();

// Listen for window resize events and update radius accordingly
window.addEventListener('resize', updateRadius);     



// Function to update text content and add a new id
function updateText() {
  const textElement = document.getElementById('dynamicText');
  
  if (window.innerWidth <= 500) {
    textElement.textContent = 'Year-to-Date Contributions';
  } else {
    textElement.textContent = 'Year-to-Date';
  }
}

// Initial call to set the initial text
updateText();

// Listen for window resize events and update text accordingly
window.addEventListener('resize', updateText);







// const containers = document.getElementsByClassName('container');
const container = document.getElementById('container');
const leftSection = document.getElementById('left-section');
const centerSection = document.getElementById('center-section');
const rightSection = document.getElementById('right-section');
function showall(){
  leftSection.style.display = 'flex';
  centerSection.style.display = 'flex';
  rightSection.style.display = 'flex';
  var centerAllElement = document.querySelector('.center-all');

  if (centerAllElement) {
    // Set the height to 88vh
    centerAllElement.style.height = '135vh';
  }

}

function showSection(section) {
  leftSection.style.display = 'none';
  centerSection.style.display = 'none';
  rightSection.style.display = 'none';
  // container.style.display = 'none';
  
  if (section) {
    section.style.display = 'flex';
  }
}

document.getElementById('home').addEventListener('click', () => showall());
document.getElementById('Dash').addEventListener('click', () => showSection(centerSection));
document.getElementById('static').addEventListener('click', () => showSection(rightSection));
document.getElementById('profile').addEventListener('click', () => showSection(leftSection));







  // Function to hide the element with class 'compare'
  function hideCompareElement() {
    var compareElement = document.querySelector('.compare');
    if (compareElement) {
      compareElement.style.display = 'none';
    }
  }
  function unhideCompareElement() {
    var compareElement = document.querySelector('.compare');
    if (compareElement) {
      compareElement.style.display = 'block';
    }
  }

  // Function to show the element with id 'tabs'
  function showTabsElement() {
    var tabsElement = document.getElementById('Tabs');
    if (tabsElement) {
      tabsElement.style.display = 'flex';
    }
  }
  function hideTabsElement() {
    var tabsElement = document.getElementById('Tabs');
    if (tabsElement) {
      tabsElement.style.display = 'none';
    }
  }
  function showBothhere(){
    document.getElementById('bothhere').style.display='flex';
  }
  function unshowBothhere(){
    document.getElementById('bothhere').style.display='none';
  }
  
// Function to hide the bellIcon and show the crossIcon
  function showCrossIcon() {
    document.getElementById('bellIcon').style.display = 'none';
    document.getElementById('crossIcon').style.display = 'block';
  }
  
  // Function to hide the crossIcon and show the bellIcon
  function showBellIcon() {
    document.getElementById('bellIcon').style.display = 'block';
    document.getElementById('crossIcon').style.display = 'none';
  }

  // Event listener for the 'Dash' element
  document.getElementById('static').addEventListener('click', function () {
    showCrossIcon();
    hideTabsElement();
    addCrossAnimation(); // Call the animation function
    showBothhere()

    
  });
  
  const compare = document.querySelectorAll('.compare');
  
  // Event listeners for other navbar elements
  document.getElementById('home').addEventListener('click', function () {
    showBellIcon();
    unhideCompareElement()
  });
  document.getElementById('profile').addEventListener('click', function () {
    showBellIcon();
    
  });
  document.getElementById('Dash').addEventListener('click', function () {
    showBellIcon();
    hideCompareElement();
    var centerAllElement = document.querySelector('.center-all');

    if (centerAllElement) {
      // Set the height to 88vh
      centerAllElement.style.height = '90vh';
    }

  });
  document.getElementById('crossIcon').addEventListener('click', function () {
    showBellIcon();
    showTabsElement();
    unhideCompareElement()
    showall()
    unshowBothhere()
  });


  // Function to add animation to the cross icon
function addCrossAnimation() {
  var crossIconElement = document.getElementById('crossIcon');
  if (crossIconElement) {
    crossIconElement.classList.add('cross-animation');

    // Remove the animation class after the animation completes
    setTimeout(function () {
      crossIconElement.classList.remove('cross-animation');
    }, 1000); // Adjust the timeout based on the animation duration
  }
}



  // Function to handle the click event
function handleCrossIconClick() {
  // Add the animation class to the bell icon
  var bellIconElement = document.getElementById('bellIcon');
  if (bellIconElement) {
    bellIconElement.classList.add('bell-animation');

    // Remove the animation class after the animation completes
    setTimeout(function () {
      bellIconElement.classList.remove('bell-animation');
    }, 1000); // Adjust the timeout based on the animation duration
  }
}

// Check the screen width before adding the click event listener
if (window.innerWidth <= 500) {
  document.getElementById('crossIcon').addEventListener('click', handleCrossIconClick);
}

// for graph circle

// Function to update circle attributes based on media query
function updateCircleAttributes() {
  // Check the screen width
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Get all circles with the class 'progress' and 'only'
  const circles = document.querySelectorAll('.progress, .only');

  // Set the new attributes based on the screen width
  const newCx = screenWidth <= 768 ? 44 :70;
  const newCy = screenWidth <= 768 ? 52 : 70;
  const newR = screenWidth <= 768 ? 40 : 50;

  // Update attributes for each circle
  circles.forEach(circle => {
    circle.setAttribute('cx', newCx);
    circle.setAttribute('cy', newCy);
    circle.setAttribute('r', newR);
  });
}

// Initial call to set the initial attributes
updateCircleAttributes();

// Listen for window resize events and update attributes accordingly
window.addEventListener('resize', updateCircleAttributes);


document.addEventListener('DOMContentLoaded', function () {
  // Get the content of the element with class "both"
  var bothContent = document.querySelector('.compare').innerHTML;

  // Set the content to the element with id "bothhere"
  document.getElementById('bothhere').innerHTML = bothContent;
});