function getTodayAndAddDays(addDays) {
  // Get today's date
  const today = new Date();

  // Add 1 day to the current date
  var nextDay = new Date(today);
  nextDay.setDate(today.getDate() + addDays);

  // Get day, month, and year
  const day = nextDay.getDate();
  const month = nextDay.toLocaleString('default', { month: 'long' });
  const year = nextDay.getFullYear();

  // Format the date string
  const formattedDate = day + ' ' + month + ' ' + year;
  const formattedDateISO = new Date(year, nextDay.getMonth(), day, 13, 0).toISOString().slice(0, -1).replace('T', ' ');

  return { Date: nextDay, String: formattedDate, StringISO: formattedDateISO };
}

  console.log(getTodayAndAddDays(20))