from calculator_core import START_DATE, calculate_years_weeks

if __name__ == "__main__":
    end_date_input = input("Enter end date (YYYY-MM-DD): ")
    try:
        years, weeks = calculate_years_weeks(START_DATE, end_date_input)
        print(f"Years: {years}, Weeks: {weeks}")
        print(f"Row: {years+1} Week: {weeks}")
    except ValueError as e:
        print(f"Error: {e}")
