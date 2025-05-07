
    // calculates time since date 
function calculateAge(birthDate) {
  
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonth;
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return `${years} years, ${months} months, and ${days} days`;
  }
  // date to calculate from 
  const birthDate = new Date("2017-09-10T23:00:00");
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dog-age").textContent = calculateAge(birthDate);
  });