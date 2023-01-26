// Ensure proper comma spacing within numbers for cleaner look. 
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}