const Engineer1 = require('../lib/Engineer1');



test('Create an Engineer object and gets access to its properties', () => {
    const engineer = new Engineer1('Ahrum', 10, 'ahrum.noh@gmail.com', 'ahrumNoh');

    expect(engineer.github).toStrictEqual(expect.any(String));
});


test('return engineer github value', () => {
    const engineer = new Engineer1('ahrum', 10, 'ahrum@gmail.com', 'ahrumNoh');
    expect(engineer.getGithub()).toStrictEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer1('ahrum', 10, 'ahrum@gmail.com', 'ahrumNoh');
    expect(engineer.getRole()).toStrictEqual('Engineer1');
});

