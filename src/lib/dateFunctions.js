// Convert Date Obj into a string in YYYY-MM-DD Format
export const isoDateFunction = (date) => {
  return date.toISOString().slice(0, 10)
}