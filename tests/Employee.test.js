const Employee = require('../lib/employee.js');

describe('employee test', () => {
  test('can get values', () => {
    const employee = new Employee('Mark', '023', 'mark@email.com');
    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe('023');
    expect(employee.email).toBe('mark@email.com');
    expect(employee.getName()).toBe('Mark');
    expect(employee.getId()).toBe('023');
    expect(employee.getEmail()).toBe('mark@email.com');
    expect(employee.getRole()).toBe('Employee');
  });
});
