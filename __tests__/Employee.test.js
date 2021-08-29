const Employee1 = require('../lib/Employee1');




test('Create an employee object and gets access to its properties', () => {
    const employee = new Employee1('Ahrum', 10, 'ahrum.noh@gmail.com');

    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
});


test('returns to the expected name', () => {
    const employee = new Employee1('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getName()).toStrictEqual(expect.any(String));
});

test('return to the expected ID', () => {
    const employee = new Employee1('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getId()).toStrictEqual(expect.any(Number));
});

test('return to the expected Email', () => {
    const employee = new Employee1('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getEmail()).toStrictEqual(expect.any(String));
});

test('gets role of employee', () => {
    const employee = new Employee1('ahrum', 10, 'ahrum@gmail.com');
    expect(employee.getRole()).toStrictEqual('Employee1')
});

