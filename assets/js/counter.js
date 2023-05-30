function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function updateCounter(counterElement) {
    var currentValue = parseInt(counterElement.textContent);
    var randomNumber = getRandomNumber(1, 10); // Adjust the range as needed
    
    var intervalId = setInterval(function() {
      if (currentValue < currentValue + randomNumber) {
        currentValue++;
        counterElement.textContent = currentValue.toLocaleString();
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    var counterElements = document.querySelectorAll('.counter-number');
    
    counterElements.forEach(function(counterElement) {
      counterElement.addEventListener('animationend', function() {
        setTimeout(function() {
          updateCounter(counterElement);
          setInterval(function() {
            updateCounter(counterElement);
          }, 5000);
        }, 100); // Adjust the delay as needed
      });
    });
  });
  