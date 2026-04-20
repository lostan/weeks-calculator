from datetime import datetime
from math import ceil

START_DATE = "1983-12-23"


def calculate_years_weeks(start_date: str, end_date: str) -> tuple[int, int]:
    start = datetime.strptime(start_date, "%Y-%m-%d")
    end = datetime.strptime(end_date, "%Y-%m-%d")
    if end < start:
        raise ValueError("end_date must be after start_date")
    days = (end - start).days
    years_float = days / 365.0
    years = int(years_float)
    weeks = ceil((years_float - years) * 52)
    return years, weeks
