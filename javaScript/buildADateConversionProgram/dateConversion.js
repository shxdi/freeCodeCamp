let currentDate = new Date();
let currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  let formattedDate = date.toLocaleDateString('en-US');

  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

function formatDateLong(date) {
  const options = {
    month: 'long',
  };
  let formattedDate = date.toLocaleDateString('en-US', options);

  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}
