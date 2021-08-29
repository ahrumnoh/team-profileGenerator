const Employee1 = require('../lib/Employee1');




test('Create an employee object and gets access to its properties', () => {
    const employee = new Employee1('Ahrum', 10, 'ahrum.noh@gmail.com');

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});


test('returns to the expected name', () => {
    const employee = new Employee('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getName()).toBe(expect.any(String));
});

test('return to the expected ID', () => {
    const employee = new Employee('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getId()).toBe(expect.any(Number));
});

test('return to the expected Email', () => {
    const employee = new Employee('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getEmail()).toBe(expect.any(String));
});

test('gets role of employee', () => {
    const employee = new Employee('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getRole()).toEqual('Employee1')
});

