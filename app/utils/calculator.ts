/**
 * Calculate the number of years and weeks between two dates.
 *
 * @param startDate - Start date in YYYY-MM-DD format
 * @param endDate - End date in YYYY-MM-DD format
 * @returns Tuple of (years, weeks)
 */
export function calculateYearsWeeksBetweenDates(
  startDate: string,
  endDate: string
): { years: number; weeks: number } {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const yearsFloat = days / 365.0;
  const years = Math.floor(yearsFloat);
  const weeks = Math.ceil((yearsFloat - years) * 52);

  return { years, weeks };
}

