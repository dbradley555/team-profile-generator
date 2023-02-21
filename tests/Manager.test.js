const Manager = require('../lib/manager.js');

describe('manager test', () => {
  test('can get values', () => {
    const manager = new Manager('Mark', '023', 'mark@email.com', '12');
    expect(manager.officeNumber).toBe('12');
    expect(manager.getOfficeNumber()).toBe('12');
    expect(manager.getRole()).toBe('Manager');
  });
});
