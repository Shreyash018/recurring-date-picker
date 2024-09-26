import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import  useDatePickerStore  from '../stores/datePickerStore';
import { act } from 'react-dom/test-utils';

jest.mock('../stores/datePickerStore');

describe('DatePicker Component', () => {
  const mockStore = {
    recurrencePattern: 'daily',
    startDate: null,
    endDate: null,
    customInterval: 1,
    specificDays: [],
    nthDay: 1,
    updatePattern: jest.fn(),
    updateStartDate: jest.fn(),
    updateEndDate: jest.fn(),
    updateCustomInterval: jest.fn(),
    updateSpecificDays: jest.fn(),
    updateNthDay: jest.fn(),
  };

  beforeEach(() => {
    useDatePickerStore.mockReturnValue(mockStore);
  });

  it('should render the date picker component', () => {
    render(<DatePicker />);
    expect(screen.getByText('Select Recurrence')).toBeInTheDocument();
  });

  it('should update the recurrence pattern', () => {
    render(<DatePicker />);
    act(() => {
      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'weekly' },
      });
    });
    expect(mockStore.updatePattern).toHaveBeenCalledWith('weekly');
  });
});
