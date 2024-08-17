function countdownTimer() {
    const endDate = new Date('2024-5-31 23:59:59').getTime();
  
    const timerInterval = setInterval(function() {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      if (distance <= 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = 'Time\'s up!';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = days + ' days, ' + hours + ' hours, ' + minutes + ' mins, ' + seconds + ' seconds. ';
      }
    }, 1000);
  }
  
  countdownTimer();