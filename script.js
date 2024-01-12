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
    showBothhere();
    changeStyles();

    
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
  const phoneCx = screenWidth <= 320 ? 34 :70;
  const phonedCy = screenWidth <= 320 ? 42 : 70;
  const phoneR = screenWidth <= 320 ? 30 : 50;
  const phone1Cx = screenWidth <= 480 ? 44 :70;
  const phone1dCy = screenWidth <= 480 ? 52 : 70;
  const phone1R = screenWidth <= 480 ? 40 : 50;
  const phone2Cx = screenWidth <= 480 ? 34 :70;
  const phone2dCy = screenWidth <= 480 ? 42 : 70;
  const phone2R = screenWidth <= 480 ? 30 : 50;

  // Update attributes for each circle
  circles.forEach(circle => {
    circle.setAttribute('cx', newCx);
    circle.setAttribute('cy', newCy);
    circle.setAttribute('r', newR);
    circle.setAttribute('cx', phoneCx);
    circle.setAttribute('cy', phonedCy);
    circle.setAttribute('r', phoneR);
    circle.setAttribute('cx', phone1Cx);
    circle.setAttribute('cy', phone1dCy);
    circle.setAttribute('r', phone1R);
    circle.setAttribute('cx', phone2Cx);
    circle.setAttribute('cy', phone2dCy);
    circle.setAttribute('r', phone2R);
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



/*
hello

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
}

*/

// function changeStyles() {
//   // Modify styles for .top .title1
//   document.querySelector('.top .title1').style.fontSize = '11px';

//   // Modify styles for .top .title
//   document.querySelector('.top .title').style.fontSize = '15px';

//   // Modify styles for .top
//   document.querySelector('.top').style.marginTop = '34px';
//   document.querySelector('.top').style.marginBottom = '0px';

//   // Modify styles for .both .left #age
//   document.querySelector('.both .left #age').style.marginBottom = '10px';
//   document.querySelector('.both .left #age').style.marginTop = '10px';
//   document.querySelector('.both .left #age').style.fontSize = '13px';

//   // Modify styles for .both .left #salary
//   document.querySelector('.both .left #salary').style.marginBottom = '10px';
//   document.querySelector('.both .left #salary').style.marginTop = '10px';
//   document.querySelector('.both .left #salary').style.fontSize = '13px';

//   // Modify styles for .both .left #gender
//   document.querySelector('.both .left #gender').style.marginBottom = '10px';
//   document.querySelector('.both .left #gender').style.marginTop = '10px';
//   document.querySelector('.both .left #gender').style.fontSize = '13px';

//   // Modify styles for .skill
//   document.querySelector('.skill').style.position = 'relative';
//   document.querySelector('.skill').style.height = '130px';
//   document.querySelector('.skill').style.width = '70px';

//   // Modify styles for .strategy
//   document.querySelector('.strategy').style.display = 'flex';
//   document.querySelector('.strategy').style.flexDirection = 'column';
//   document.querySelector('.strategy').style.marginTop = '22px';

//   // Modify styles for .strategy h2
//   document.querySelector('.strategy h2').style.fontSize = '18px';

//   // Modify styles for .strategy .employee
//   document.querySelector('.strategy .employee').style.marginTop = '20px';
//   document.querySelector('.strategy .employee').style.fontWeight = 'bolder';
//   document.querySelector('.strategy .employee').style.fontSize = '12px';

//   // Modify styles for .input
//   document.querySelector('.input').style.justifyContent = 'center';
//   document.querySelector('.input').style.marginTop = '0px';

//   // Modify styles for .slider
//   document.querySelector('.slider').style.width = '67%';
//   document.querySelector('.slider').style.marginBottom = '8px';
//   document.querySelector('.slider').style.backgroundColor = '#b9b9b9';
//   document.querySelector('.slider').style.height = '3px';

//   // Modify styles for .input span
//   document.querySelector('.input span').style.fontWeight = 'bold';
//   document.querySelector('.input span').style.fontSize = '13px';
//   document.querySelector('.input span').style.marginLeft = '23px';

//   // Modify styles for age
//   document.querySelector('age').style.marginTop = '11px';
//   document.querySelector('age').style.fontWeight = 'bold';
//   document.querySelector('age').style.fontSize = '13px';

//   // Modify styles for .contribution .rate .text
//   document.querySelector('.contribution .rate .text').style.marginRight = '156px';
//   document.querySelector('.contribution .rate .text').style.fontWeight = 'bold';
//   document.querySelector('.contribution .rate .text').style.fontSize = '13px';

//   // Modify styles for .contribution .employer .text
//   document.querySelector('.contribution .employer .text').style.marginRight = '107px';
//   document.querySelector('.contribution .employer .text').style.fontWeight = 'bold';
//   document.querySelector('.contribution .employer .text').style.fontSize = '12px';

//   // Modify styles for .contribution .employer .per
//   document.querySelector('.contribution .employer .per').style.fontWeight = 'bold';
//   document.querySelector('.contribution .employer .per').style.fontSize = '14px';

//   // Modify styles for .contribution .rate .per
//   document.querySelector('.contribution .rate .per').style.fontWeight = 'bold';
//   document.querySelector('.contribution .rate .per').style.fontSize = '14px';

//   // Modify styles for .container
//   document.querySelector('.container').style.flexDirection = 'column';
  
//   // Modify styles for .strategy button
//   const strategyButton = document.querySelector('.strategy button');
//   strategyButton.style.borderRadius = '0px 0px 20px 20px';
//   strategyButton.style.width = '317px';
//   strategyButton.style.backgroundColor = 'rgb(64, 25, 235)';
//   strategyButton.style.height = '60px';
//   strategyButton.style.boxShadow = '0px -5px 10px rgba(0, 0, 0, 0.5)';
//   strategyButton.style.transition = 'transform 0.3s ease';
//   strategyButton.style.border = 'none';
//   if (window.innerWidth <= 320) {
//     // Modify styles accordingly for 320px viewport width
//     document.querySelector('.top .title1').style.fontSize = '10px';
//     document.querySelector('.top .title').style.fontSize = '13px';
//     // Add more styles as needed
// }
// }
