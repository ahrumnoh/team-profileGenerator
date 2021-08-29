
const Intern1 = require('../lib/Intern1');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern1('ahrum', 10, 'ahrum@gmail.com','USYD');
    
    expect(intern.school) .toBe(expect.any(String));
});

// gets school from getUniversity()
test('gets employee school', () => {
    const intern = new Intern1('ahrum', 10, 'ahrum@gmail.com','USYD');
    
    expect(intern.getUniversity()).toEqual(expect.stringContaining(intern.university.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern1('ahrum', 10, 'ahrum@gmail.com','USYD');

    expect(intern.getRole()).toEqual("Intern1");
}); 