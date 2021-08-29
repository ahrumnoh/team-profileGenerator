// using Manager constructor 
const Manager1 = require('../lib/Manager1');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager1('ahrum', 10, 'ahrum@gmail.com',1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager1('ahrum', 10, 'ahrum@gmail.com',1);

    expect(manager.getRole()).toEqual("Manager1");
}); 