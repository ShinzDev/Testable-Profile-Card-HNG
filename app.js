 
   function initTimeTracker() {
     const timeElement = document.querySelector('[data-testid="test-user-time"]');
     
     if (!timeElement) return;

     // Function to update the time
     const updateTime = () => {
       timeElement.textContent = Date.now();
     };

     // Set initial time immediately on render
     updateTime();

     // Update time every 500ms
     setInterval(updateTime, 500);
   }

   // Run when the DOM is fully loaded
   document.addEventListener('DOMContentLoaded', initTimeTracker);