"use client";

import { useState } from "react";
import { calculateYearsWeeksBetweenDates } from "./utils/calculator";

const START_DATE = "1983-12-23";

export default function Home() {
  const [startDate, setStartDate] = useState(START_DATE);
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState<{ years: number; weeks: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleCalculate() {
    setError(null);

    if (!startDate || !endDate) {
      setError("Please provide both start and end dates");
      return;
    }

    try {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        throw new Error("Invalid date format");
      }

      if (end < start) {
        throw new Error("End date must be after start date");
      }

      const calculation = calculateYearsWeeksBetweenDates(startDate, endDate);
      setResult(calculation);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid date format. Please use YYYY-MM-DD format.");
      setResult(null);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleCalculate();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCalculate();
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Weeks Calculator</h1>
        <p className="text-gray-600 mb-8">Calculate years and weeks between two dates</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={!startDate || !endDate}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Calculate
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {result && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Results</h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Years:</span> {result.years}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Weeks:</span> {result.weeks}
                </p>
                <div className="pt-3 border-t border-indigo-200">
                  <p className="text-lg font-semibold text-indigo-900">
                    Row: {result.years + 1} Week: {result.weeks}
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

