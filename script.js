function updateCountdown() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1)
  const difference = newYear - today;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
   document.getElementById('days').textContent = days;
}
updateCountdown();
setInterval(updateCountdown, 60000);