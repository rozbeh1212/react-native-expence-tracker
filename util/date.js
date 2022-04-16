export function getFormattedDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // get month is zero based so add 1 to get correct month number 
}