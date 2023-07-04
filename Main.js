 function CalculateDueDate(startdate, time)
 {
    if (!isValidDate(startdate)) {
        throw new Error('Invalid start date format. Please provide a valid date and time.');
      }
      
      if (!Number.isInteger(time) || time < 0) {
        throw new Error('Invalid turnaround time. Please provide a positive integer.');
      }

      const startDateObj = new Date(startdate); // Parse start date string into a Date object

      const workingDays = Math.floor(time / 8); // Number of full working days
      const remainingHours = time % 8; // Remaining hours beyond full working days

      let dueDate = addWorkingDays(startDateObj, workingDays); // Calculate due date based on working days
      dueDate = addRemainingHours(dueDate, remainingHours);

    
     // return formatDate(dueDate);
   return formatDate(dueDate);
 }

 function addRemainingHours(date , hours)
 {
  const dueHours = date.getHours() + hours;
  if (dueHours >= 17) { 
    const nextDay = new Date(date);
    addWorkingDays(nextDay, 1);
    nextDay.setHours(9 + (dueHours - 17)); // Set the remaining hours for the next working day
    date = nextDay;
  } else {
    date.setHours(dueHours);
  }
  return date;
 }

 function addWorkingDays(date, days) {
  const newDate = new Date(date.getTime());

  let remainingDays = days;
  while (remainingDays > 0) {
    newDate.setDate(newDate.getDate() + 1);
    if (newDate.getDay() !== 0 && newDate.getDay() !== 6) {
      // Skip weekends (Saturday: 6, Sunday: 0)
      remainingDays--;
    }
  }

  return newDate;
}

function isValidDate(date) 
{
  const dateFormat = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
  return dateFormat.test(date);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

let curDate = new Date();
const formattedDateTime = curDate.toString();

console.log(CalculateDueDate('2023-07-11 12:30', 16));





module.exports = {
  CalculateDueDate
};