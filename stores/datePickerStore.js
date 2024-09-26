
import create from 'zustand';

const useDatePickerStore = create((set) => ({
  recurrencePattern: 'daily',
  startDate: '',
  endDate: '',
  customInterval: 1,
  specificDays: [],
  nthDay: 1,
  
  updatePattern: (pattern) => set({ recurrencePattern: pattern }),
  updateStartDate: (date) => set({ startDate: date }),
  updateEndDate: (date) => set({ endDate: date }),
  updateCustomInterval: (interval) => set({ customInterval: interval }),
  updateSpecificDays: (days) => set({ specificDays: days }),
  updateNthDay: (day) => set({ nthDay: day }),
}));

export default useDatePickerStore;

