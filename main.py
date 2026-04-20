import json
import functions_framework
from calculator_core import START_DATE, calculate_years_weeks


@functions_framework.http
def weeks_calculator(request):
    if request.method == "OPTIONS":
        return ("", 204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "Content-Type",
        })

    try:
        if request.is_json:
            body = request.get_json(silent=True) or {}
            start_date = body.get("start_date", START_DATE)
            end_date = body.get("end_date")
        else:
            start_date = request.args.get("start_date", START_DATE)
            end_date = request.args.get("end_date")

        if not end_date:
            return (json.dumps({"error": "end_date is required"}), 400,
                    {"Content-Type": "application/json"})

        years, weeks = calculate_years_weeks(start_date, end_date)
        result = {
            "years": years,
            "weeks": weeks,
            "row": years + 1,
            "formatted": f"Row: {years + 1} Week: {weeks}",
        }
        return (json.dumps(result), 200, {"Content-Type": "application/json"})

    except ValueError as e:
        return (json.dumps({"error": str(e)}), 400,
                {"Content-Type": "application/json"})
