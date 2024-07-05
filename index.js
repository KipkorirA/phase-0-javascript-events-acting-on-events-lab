
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    
    const currentLeft = parseInt(dodger.style.left, 10);
    
    const moveLeft = 10; 
    
    const newLeft = currentLeft - moveLeft;
    
    dodger.style.left = `${newLeft}px`;
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    
    const currentLeft = parseInt(dodger.style.left, 10);
    
    const moveRight = 10; 

    const newLeft = currentLeft + moveRight;
    
    dodger.style.left = `${newLeft}px`;
  }
  