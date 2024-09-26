"use client";
import DatePicker from '../components/DatePicker';

import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <DatePicker />
    </div>
  );
}
