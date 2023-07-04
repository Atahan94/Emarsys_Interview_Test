const { CalculateDueDate } = require('../Main');

test('CalculateDueDate should return the correct due date', () => {
  const startDate = '2023-07-03 09:00';
  const turnaroundTime = 16;
  const dueDate = CalculateDueDate(startDate, turnaroundTime);
  expect(dueDate).toBe('2023-07-05 09:00');
});

test('CalculateDueDate should return the correct due date', () => {
    const startDate = '2023-07-05 09:00';
    const turnaroundTime = 8;
    const dueDate = CalculateDueDate(startDate, turnaroundTime);
    expect(dueDate).toBe('2023-07-06 09:00');
  });
  
test('CalculateDueDate should return the correct due date', () => {
    const startDate = '2023-07-11 12:30';
    const turnaroundTime = 16;
    const dueDate = CalculateDueDate(startDate, turnaroundTime);
    expect(dueDate).toBe('2023-07-13 12:30');
  });

test('CalculateDueDate should return the correct due date', () => {
    const startDate = '2023-07-07 11:00';
    const turnaroundTime = 24;
    const dueDate = CalculateDueDate(startDate, turnaroundTime);
    expect(dueDate).toBe('2023-07-12 11:00');
  });

test('CalculateDueDate should return the correct due date', () => {
    const startDate = '2023-07-11 09:00';
    const turnaroundTime = 3;
    const dueDate = CalculateDueDate(startDate, turnaroundTime);
    expect(dueDate).toBe('2023-07-11 12:00');
  });