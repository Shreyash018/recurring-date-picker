// components/DatePicker.js
import React from 'react';
import useDatePickerStore from '../stores/datePickerStore';

const DatePicker = () => {
  const {
    recurrencePattern,
    startDate,
    endDate,
    customInterval,
    specificDays,
    nthDay,
    updatePattern,
    updateStartDate,
    updateEndDate,
    updateCustomInterval,
    updateSpecificDays,
    updateNthDay,
  } = useDatePickerStore();

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Select Recurrence</h2>
      <div className="mb-4">
        <label className="block mb-2">Recurrence Pattern</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={recurrencePattern}
          onChange={(e) => updatePattern(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Start Date</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          value={startDate}
          onChange={(e) => updateStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">End Date (optional)</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          value={endDate}
          onChange={(e) => updateEndDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Custom Interval</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={customInterval}
          onChange={(e) => updateCustomInterval(Number(e.target.value))}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Preview</h3>
        <div className="p-4 border border-gray-300 rounded">
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>Pattern: {recurrencePattern}</p>
          <p>Interval: Every {customInterval} {recurrencePattern}(s)</p>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;

