



document.addEventListener('DOMContentLoaded',function(){
    // Handle Complete buttons
  let completeButtons = document.querySelectorAll('#completedButton');
    
  for (let i = 0; i < completeButtons.length; i++) {
      completeButtons[i].addEventListener('click', function() {
          alert('Board updated successfully');
          
          // sonkha barano
          let twoThreeElement = document.getElementById('twoThree');
          let zeroFiveElement = document.getElementById('zeroFive');
          console.log(twoThreeElement,zeroFiveElement);
          twoThreeElement.textContent = parseInt(twoThreeElement.textContent) + 1;
          zeroFiveElement.textContent = parseInt(zeroFiveElement.textContent) - 1;
          
          // activity te notun div
          let activityLog = document.querySelector('.activity-log');
          let newEntry = document.createElement('div');
          newEntry.className = 'bg-[#F4F7FF] w-[200px] h-[40px] text-[9px]';
          newEntry.innerHTML = '<p>You have completed the task at <span class="date-time">' + new Date().toLocaleString() + '</span></p>';
          
          // Add new entry at top
          activityLog.insertBefore(newEntry, activityLog.firstChild);

         
          const btn = document.querySelectorAll('#completedButton');
          btn.classList.add('btn active');
          btn.classList.remove('bg-[#3752FD]')

          
          


      });
  }

})

  