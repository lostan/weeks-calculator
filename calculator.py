from datetime import datetime, timedelta
from math import ceil

START_DATE = "1983-12-23"

def calculate_years_weeks_between_dates(start_date, end_date):
    """
    Calculate the number of years and weeks between two dates.

    Args:
        start_date: Start date in YYYY-MM-DD format
        end_date: End date in YYYY-MM-DD format

    Returns:
        Tuple of (years, weeks)
    """
    start_date = datetime.strptime(start_date, "%Y-%m-%d")
    end_date = datetime.strptime(end_date, "%Y-%m-%d")
    days = (end_date - start_date).days
    years_float = days / 365.0
    years = int(years_float)
    weeks = ceil((years_float - years) * 52)
    return years, weeks

if __name__ == "__main__":
    end_date_input = input("Enter end date (YYYY-MM-DD): ")
    try:
        years, weeks = calculate_years_weeks_between_dates(START_DATE, end_date_input)
        print(f"Years: {years}, Weeks: {weeks}")
        print(f"Row: {years+1} Week: {weeks}")
    except ValueError as e:
        print(f"Invalid date format. Please use YYYY-MM-DD format. Error: {e}")
