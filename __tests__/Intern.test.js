const Intern1 = require('../lib/Intern1');


test('creates an Intern object', () => {
    const intern = new Intern1('ahrum', 10, 'ahrum@gmail.com','USYD');
    
    expect(intern.university).toStrictEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern1('ahrum', 10, 'ahrum@gmail.com','USYD');
    
    expect(intern.getUniversity()).toEqual(expect.stringContaining(intern.university.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern1('ahrum', 10, 'ahrum@gmail.com','USYD');

    expect(intern.getRole()).toEqual("Intern1");
}); 