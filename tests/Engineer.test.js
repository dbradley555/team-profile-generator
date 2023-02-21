const Engineer = require('../lib/engineer.js');

describe('engineer test', () => {
  test('can get values', () => {
    const engineer = new Engineer('Mark', '023', 'mark@email.com', 'gituser');
    expect(engineer.github).toBe('gituser');
    expect(engineer.getGithub()).toBe('gituser');
    expect(engineer.getRole()).toBe('Engineer');
  });
});
