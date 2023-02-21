const Intern = require('../lib/intern.js');

describe('intern test', () => {
  test('can get values', () => {
    const intern = new Intern('Mark', '023', 'mark@email.com', 'University');
    expect(intern.school).toBe('University');
    expect(intern.getSchool()).toBe('University');
    expect(intern.getRole()).toBe('Intern');
  });
});
