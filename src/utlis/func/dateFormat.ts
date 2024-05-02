export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);

  // Format the date
  const formatter = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedDate = formatter.format(date);

  // Extract day, add the appropriate suffix, and reinsert into the formatted date
  const day = date.getDate();
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }
  const formattedDateWithSuffix = formattedDate.replace(
    `${day}`,
    `${day}${suffix}`
  );

  return formattedDateWithSuffix;
};

// Example usage
const timestamp = Date.now(); // Generate a timestamp
const formattedDate = formatDate(timestamp);
console.log(formattedDate); // Output: e.g., "2nd March 2024"
